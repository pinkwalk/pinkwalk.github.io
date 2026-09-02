import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  type Firestore,
} from "firebase/firestore";
import { getAnalytics, isSupported, logEvent, type Analytics } from "firebase/analytics";

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
 * Save notification email to Firestore `notifications` collection
 * and log a Google Analytics event.
 */
export async function saveNotificationEmail(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const firestore = getDb();
    if (firestore) {
      await addDoc(collection(firestore, "notifications"), {
        email: email.trim().toLowerCase(),
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

    return { success: true };
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
 */
export async function saveRegistration(registrationData: {
  name: string;
  email: string;
  phone: string;
  size: string;
  group?: string;
  notes?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const firestore = getDb();
    if (firestore) {
      await addDoc(collection(firestore, "registrations"), {
        ...registrationData,
        email: registrationData.email.trim().toLowerCase(),
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

    return { success: true };
  } catch (err) {
    console.error("[Firebase] Error saving registration:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to submit registration",
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
