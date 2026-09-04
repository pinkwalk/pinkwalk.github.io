import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
  type Firestore,
} from "firebase/firestore";
import {
  getAnalytics,
  isSupported,
  logEvent,
  type Analytics,
} from "firebase/analytics";
import { sendPartnerNotificationEmail } from "./email-service";

// Reads credentials from Vite environment variables (VITE_FIREBASE_*)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "",
};

let app: FirebaseApp | undefined;
let db: Firestore | undefined;
let analytics: Analytics | undefined;

function getFirebaseApp(): FirebaseApp | undefined {
  if (typeof window === "undefined") return undefined;
  if (!firebaseConfig.projectId || !firebaseConfig.apiKey) {
    console.warn(
      "[Firebase] Configuration missing. Set VITE_FIREBASE_* env vars in your project or build settings.",
    );
    return undefined;
  }
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  return app;
}

export function getDb(): Firestore | undefined {
  if (!db) {
    const firebaseApp = getFirebaseApp();
    if (firebaseApp) {
      db = getFirestore(firebaseApp);
    }
  }
  return db;
}

export async function initAnalytics(): Promise<Analytics | undefined> {
  if (analytics) return analytics;
  const firebaseApp = getFirebaseApp();
  if (firebaseApp && (await isSupported())) {
    analytics = getAnalytics(firebaseApp);
  }
  return analytics;
}

/**
 * Save notification email to Firestore `notifications` collection.
 * Prevents duplicate emails by checking existing document ID.
 */
export async function saveNotificationEmail(
  email: string,
): Promise<{ success: boolean; alreadyRegistered?: boolean; error?: string }> {
  try {
    const firestore = getDb();
    const cleanEmail = email.trim().toLowerCase();
    const docId = cleanEmail.replace(/[^a-z0-9@._-]/g, "_");

    if (firestore) {
      const docRef = doc(firestore, "notifications", docId);
      let alreadyExists = false;

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap && docSnap.exists()) {
          alreadyExists = true;
        }
      } catch (readErr) {
        console.warn(
          "[Firebase] Could not check existing notification document:",
          readErr,
        );
      }

      if (alreadyExists) {
        return { success: true, alreadyRegistered: true };
      }

      await setDoc(docRef, {
        email: cleanEmail,
        createdAt: serverTimestamp(),
        source: "coming_soon_page",
      });
    }

    // Log Analytics Event
    const ga = await initAnalytics();
    if (ga) {
      logEvent(ga, "notification_signup", {
        event_category: "engagement",
        event_label: "coming_soon_registration",
      });
    }

    return { success: true, alreadyRegistered: false };
  } catch (err) {
    console.error("[Firebase] Error saving notification email:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to save email",
    };
  }
}

/**
 * Save complete registration data to Firestore `registrations` collection.
 * Prevents duplicate registrations for the same email address.
 */
export async function saveRegistration(registrationData: {
  name: string;
  email: string;
  phone: string;
  size: string;
  group?: string;
  notes?: string;
}): Promise<{ success: boolean; alreadyRegistered?: boolean; error?: string }> {
  try {
    const firestore = getDb();
    const cleanEmail = registrationData.email.trim().toLowerCase();
    const docId = cleanEmail.replace(/[^a-z0-9@._-]/g, "_");

    if (firestore) {
      const docRef = doc(firestore, "registrations", docId);
      let alreadyExists = false;

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap && docSnap.exists()) {
          alreadyExists = true;
        }
      } catch (readErr) {
        console.warn(
          "[Firebase] Could not check existing registration document:",
          readErr,
        );
      }

      if (alreadyExists) {
        return { success: true, alreadyRegistered: true };
      }

      await setDoc(docRef, {
        ...registrationData,
        email: cleanEmail,
        createdAt: serverTimestamp(),
        status: "confirmed",
      });
    }

    // Log Analytics Event
    const ga = await initAnalytics();
    if (ga) {
      logEvent(ga, "registration_submit", {
        event_category: "conversion",
        tshirt_size: registrationData.size,
      });
    }

    return { success: true, alreadyRegistered: false };
  } catch (err) {
    console.error("[Firebase] Error saving registration:", err);
    return {
      success: false,
      error:
        err instanceof Error ? err.message : "Failed to submit registration",
    };
  }
}

/**
 * Save partner inquiry application to Firestore `partner_inquiries` collection.
 */
export async function savePartnerInquiry(data: {
  organizationName: string;
  contactPerson: string;
  designation?: string;
  contactNumber: string;
  email: string;
  partnershipType: string;
  contributionText: string;
  website?: string;
  source?: string;
}): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const firestore = getDb();
    const cleanEmail = data.email.trim().toLowerCase();

    if (firestore) {
      const colRef = collection(firestore, "partner_inquiries");
      const docRef = await addDoc(colRef, {
        organizationName: data.organizationName.trim(),
        contactPerson: data.contactPerson.trim(),
        designation: data.designation?.trim() || "",
        contactNumber: data.contactNumber.trim(),
        email: cleanEmail,
        partnershipType: data.partnershipType,
        contributionText: data.contributionText.trim(),
        website: data.website?.trim() || "",
        status: "pending",
        source: data.source || "website_partner_form",
        createdAt: serverTimestamp(),
      });

      // Log Analytics Event
      const ga = await initAnalytics();
      if (ga) {
        logEvent(ga, "partner_inquiry_submit", {
          event_category: "lead",
          partnership_type: data.partnershipType,
        });
      }

      // Trigger Resend Email Notification (non-blocking for UI)
      sendPartnerNotificationEmail({
        organizationName: data.organizationName.trim(),
        contactPerson: data.contactPerson.trim(),
        designation: data.designation?.trim(),
        contactNumber: data.contactNumber.trim(),
        email: cleanEmail,
        partnershipType: data.partnershipType,
        contributionText: data.contributionText.trim(),
        website: data.website?.trim(),
        inquiryId: docRef.id,
      }).catch((emailErr) => {
        console.warn("[Firebase] Email notification trigger failed:", emailErr);
      });

      return { success: true, id: docRef.id };
    }

    return {
      success: false,
      error: "Firebase Firestore is not initialized",
    };
  } catch (err) {
    console.error("[Firebase] Error saving partner inquiry:", err);
    return {
      success: false,
      error:
        err instanceof Error ? err.message : "Failed to submit partner inquiry",
    };
  }
}

/**
 * Track custom pageview in Google Analytics.
 */
export async function trackPageView(pageName: string): Promise<void> {
  try {
    const ga = await initAnalytics();
    if (ga) {
      logEvent(ga, "page_view", {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  } catch (err) {
    console.warn("[Analytics] Pageview tracking warning:", err);
  }
}

