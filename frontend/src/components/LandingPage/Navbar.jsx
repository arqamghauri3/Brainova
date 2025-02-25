import React from "react";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarLinks = [
    { title: "Home", href: "/" },
    { title: "Contact Us", href: "/contact" },
    { title: "How It Works", href: "/how-it-works" },
    { title: "FAQs", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Brainova</span>
        </Link>
        <nav className="flex items-center space-x-6">
          {navbarLinks.map((navbarLink) => {
            return (
              <Link
                to={navbarLink.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {navbarLink.title}
              </Link>
            );
          })}
          <div className="flex gap-1">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black h-9 px-4 py-2">
              <Link to="/register">Sign Up</Link>
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black h-9 px-4 py-2">
              <Link to="/login">Sign In</Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
