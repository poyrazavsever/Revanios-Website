import Link from "next/link";
import { Icon } from "@iconify/react";
import { Typography } from "poyraz-ui/atoms";
import type { DocPage } from "@/lib/docs";

export function DocsSidebar({
  docs,
  activeHref,
}: {
  docs: DocPage[];
  activeHref: string;
}) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-[2rem] border border-border/70 bg-background/95 p-3 shadow-[0_18px_56px_rgba(16,24,40,0.1),0_0_0_7px_rgba(255,255,255,0.7)] backdrop-blur-xl">
        <div className="flex items-center gap-3 px-3 py-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon icon="mdi:file-document-outline" className="h-5 w-5" />
          </span>
          <div>
            <Typography variant="h3" component="p" className="text-base">
              Docs
            </Typography>
            <Typography variant="muted" className="text-xs">
              Neta rehberi
            </Typography>
          </div>
        </div>

        <nav className="mt-2 grid gap-1.5">
          {docs.map((doc) => {
            const isActive = doc.href === activeHref;

            return (
              <Link
                key={doc.href}
                href={doc.href}
                className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
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
      </div>
    </aside>
  );
}
