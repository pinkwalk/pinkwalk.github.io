import { Link } from "@tanstack/react-router";
import {
  lastEventSiteUrl,
  contactEmail,
  thisYearEvent,
} from "@/lib/event-data";
import logo from "@/assets/pinkwalk-logo.png";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-border/60 bg-pink-wash"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt="PinkWalk — Embrace Hope"
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            A community breast cancer awareness walk in Kathmandu Valley,
            organised by Infinite Care. Walk together. Raise awareness. Support
            life after cancer.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">
            {thisYearEvent.date} · Basantapur → Mangalbazar
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">
            Contact
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>Dijup Tuladhar</li>
            <li>Lijala Shrestha</li>
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary hover:underline"
              >
                {contactEmail}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">
            Explore
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>
              <Link to="/" hash="this-year" className="hover:text-primary">
                This Year's Walk
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-primary">
                Register
              </Link>
            </li>
            <li>
              <Link to="/past-event" className="hover:text-primary">
                PinkWalk 2023
              </Link>
            </li>
            <li>
              <Link to="/past-event" hash="news" className="hover:text-primary">
                News Coverage
              </Link>
            </li>
            <li>
              <Link
                to="https://www.infinite.com"
                hash="partner"
                className="hover:text-primary"
              >
                Infinite Nepal ↗
              </Link>
            </li>
            <li>
              <Link
                to="https://cancercarenepal.org.np"
                hash="partner"
                className="hover:text-primary"
              >
                Cancer Care Nepal ↗
              </Link>
            </li>
            {/* <li>
              <a
                href={lastEventSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                2023 event site ↗
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} PinkWalk — Infinite Care. Made with care
          for breast cancer awareness.
        </div>
      </div>
    </footer>
  );
}
