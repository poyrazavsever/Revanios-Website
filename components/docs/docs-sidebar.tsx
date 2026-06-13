"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import type { DocPage } from "@/lib/docs";

function DocsNavLinks({
  docs,
  activeHref,
  onNavigate,
}: {
  docs: DocPage[];
  activeHref: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="grid gap-1.5">
      {docs.map((doc) => {
        const isActive = doc.href === activeHref;

        return (
          <Link
            key={doc.href}
            href={doc.href}
            onClick={onNavigate}
            className={`group flex min-h-11 items-center justify-between rounded-[1.05rem] px-3.5 py-2.5 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-primary/8 text-primary shadow-[inset_0_0_0_1px_rgba(220,38,38,0.08)]"
                : "text-foreground hover:bg-accent/70"
            }`}
          >
            <span>{doc.meta.title}</span>
            <Icon
              icon={isActive ? "mdi:circle-small" : "mdi:chevron-right"}
              className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
            />
          </Link>
        );
      })}
    </nav>
  );
}

export function DocsSidebar({
  docs,
  activeHref,
}: {
  docs: DocPage[];
  activeHref: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="sticky top-28 z-30 mb-5 flex justify-start 2xl:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 items-center gap-2 rounded-2xl border border-border/80 bg-background/95 px-4 text-sm font-semibold text-foreground shadow-[0_12px_32px_rgba(16,24,40,0.1),0_0_0_6px_rgba(255,255,255,0.68)] backdrop-blur-xl transition-colors hover:bg-accent"
          aria-label="Dokumantasyon menüsünü aç"
          aria-expanded={open}
          aria-controls="docs-mobile-sidebar"
        >
          <Icon icon="mdi:menu" className="h-5 w-5" />
          Docs
        </button>
      </div>

      <aside className="fixed left-6 top-28 z-30 hidden w-56 2xl:block">
        <div className="rounded-[1.5rem] border border-border/70 bg-background/95 p-2.5 shadow-[0_18px_48px_rgba(16,24,40,0.09),0_0_0_6px_rgba(255,255,255,0.68)] backdrop-blur-xl">
          <DocsNavLinks docs={docs} activeHref={activeHref} />
        </div>
      </aside>

      <div
        className={`fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity 2xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <aside
        id="docs-mobile-sidebar"
        className={`fixed inset-y-0 left-0 z-40 flex w-full max-w-sm flex-col bg-background px-5 py-5 shadow-[24px_0_80px_rgba(16,24,40,0.18)] transition-transform duration-500 [transition-timing-function:cubic-bezier(.22,1,.36,1)] 2xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/docs"
            onClick={() => setOpen(false)}
            className="flex items-center"
            aria-label="Neta docs ana sayfa"
          >
            <img
              src="/logo/blackLogoLong.png"
              alt="Neta"
              className="h-11 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-colors hover:bg-accent"
            aria-label="Dokumantasyon menüsünü kapat"
          >
            <Icon icon="mdi:close" className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-12">
          <DocsNavLinks
            docs={docs}
            activeHref={activeHref}
            onNavigate={() => setOpen(false)}
          />
        </div>
      </aside>
    </>
  );
}
