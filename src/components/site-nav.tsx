import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import logo from "@/assets/pinkwalk-logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "This Year", to: "/" as const, hash: "this-year" as const },
  { label: "BSE Guide", to: "/awareness" as const },
  { label: "About Us", to: "/about" as const },
  { label: "The Cause", to: "/" as const, hash: "cause" as const },
  { label: "Route", to: "/" as const, hash: "route" as const },
  { label: "Partner", to: "/partner" as const },
  { label: "Past Event", to: "/past-event" as const },
  { label: "Contact", to: "/" as const, hash: "contact" as const },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="PinkWalk — Embrace Hope"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
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

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/register"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
          >
            Register
          </Link>

          {/* Mobile Navigation Trigger & Drawer */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[300px] flex-col justify-between sm:w-[350px]">
              <div>
                <SheetHeader className="border-b border-border/60 pb-4 text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <img
                      src={logo}
                      alt="PinkWalk"
                      className="h-7 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1.5">
                  {navLinks.map((l) => (
                    <Link
                      key={l.label}
                      to={l.to}
                      {...(l.hash ? { hash: l.hash } : {})}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="border-t border-border/60 pt-4">
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-pink transition-transform hover:opacity-95"
                >
                  Register Now
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

