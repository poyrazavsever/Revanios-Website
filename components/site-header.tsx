"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "poyraz-ui/atoms";
import { NAV_LINKS } from "@/config/links";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-background border-transparent"
      }`}
    >
      {/* Main Navbar */}
      <div className="container max-w-5xl mx-auto px-4 h-12 mt-2 mb-4 flex items-end justify-between">
        
        {/* Left: Logo & Links */}
        <div className="flex items-end gap-8">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/logo/blackLogoLong.png"
                alt="Neta Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/poyrazavsever/neta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            title="GitHub"
          >
            <Icon icon="mdi:github" className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>

          <Button size="sm" className="hidden sm:flex h-9">
            Hemen Başla
          </Button>
        </div>
      </div>
    </header>
  );
}
