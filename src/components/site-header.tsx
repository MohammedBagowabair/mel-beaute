"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { site, services } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

const links = [
  { href: "#treatments", label: "Treatments" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300",
        scrolled || open
          ? "bg-[color:var(--cream)]/90 shadow-[0_10px_30px_-20px_rgba(90,40,55,0.45)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <Image
            src="/brand/logo.svg"
            alt={site.name}
            width={120}
            height={68}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-body)] text-sm tracking-wide text-[color:var(--ink)]/75 transition-colors hover:text-[color:var(--berry)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--berry)] px-4 py-2 text-sm font-medium text-[color:var(--cream)] shadow-[0_12px_24px_-12px_rgba(122,36,58,0.7)] transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book on WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--gold)]/35 text-[color:var(--berry)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-[color:var(--gold)]/20 bg-[color:var(--cream)] md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-base text-[color:var(--ink)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#treatments`}
                className="rounded-xl bg-[color:var(--blush)]/55 px-3 py-2 text-sm text-[color:var(--berry)]"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const input = document.getElementById(
                    `treatment-${s.id}`,
                  ) as HTMLInputElement | null;
                  if (input) {
                    input.checked = true;
                    input.dispatchEvent(new Event("change", { bubbles: true }));
                  }
                  window.setTimeout(() => {
                    document
                      .getElementById("treatments")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 50);
                }}
              >
                {s.catalog}
              </a>
            ))}
          </div>
          <a
            href={site.whatsappMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--berry)] px-4 py-3 text-sm font-medium text-[color:var(--cream)]"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
