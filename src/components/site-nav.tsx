import { Link } from "@tanstack/react-router";
import logo from "@/assets/pinkwalk-logo.png";

const navLinks = [
  { label: "This Year", to: "/" as const, hash: "this-year" as const },
  { label: "The Cause", to: "/" as const, hash: "cause" as const },
  { label: "Route", to: "/" as const, hash: "route" as const },
  { label: "Partner", to: "/partner" as const },
  { label: "Past Event", to: "/past-event" as const },
  { label: "Contact", to: "/" as const, hash: "contact" as const },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="PinkWalk — Embrace Hope"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/register"
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
        >
          Register
        </Link>
      </div>
    </header>
  );
}
