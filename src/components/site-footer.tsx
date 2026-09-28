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
      className="mt-24 border-t border-border/60 bg-pink-wash print:hidden"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt="PinkWalk — Embrace Hope"
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            A community breast cancer awareness walk in Kathmandu Valley,
            organised by Infinite Cares. Walk together. Raise awareness. Support
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
            <li>Organizing Committee</li>
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
            Participate & Explore
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>
              <Link to="/" hash="this-year" className="hover:text-primary">
                This Year's Walk
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-primary">
                Register for Walk
              </Link>
            </li>
            <li>
              <Link to="/join" className="hover:text-primary">
                I'm Going (Photo Badge)
              </Link>
            </li>
            <li>
              <Link to="/invite" className="hover:text-primary">
                Invite Friends
              </Link>
            </li>
            <li>
              <Link to="/awareness" className="hover:text-primary">
                BSE Guide
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/past-event" className="hover:text-primary">
                PinkWalk 2023
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">
            Resources & Media
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>
              <Link to="/partner" className="hover:text-primary">
                Partner With Us
              </Link>
            </li>
            <li>
              <Link to="/branding" className="hover:text-primary">
                Branding & Media Kit
              </Link>
            </li>
            <li>
              <Link to="/press-release" className="hover:text-primary">
                Press Releases
              </Link>
            </li>
            <li>
              <Link to="/press-release" hash="news" className="hover:text-primary">
                News Coverage
              </Link>
            </li>
            <li>
              <a
                href="https://www.infinite.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Infinite Nepal ↗
              </a>
            </li>
            <li>
              <a
                href="https://cancercarenepal.org.np"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Cancer Care Nepal ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} PinkWalk — Infinite Care. Made with care
            for breast cancer awareness.
          </p>
          <div className="flex items-center gap-4 font-medium">
            <Link to="/branding" className="hover:text-primary">
              Branding & Media Kit
            </Link>
            <span>·</span>
            <Link to="/press-release" className="hover:text-primary">
              Press Releases
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
