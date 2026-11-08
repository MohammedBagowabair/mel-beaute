import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site, services } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const links = [
  { href: "/about", label: "About" },
  { href: "/#treatments", label: "Treatments" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#visit", label: "Visit" },
];

export function SiteHeader() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <input
        id="nav-toggle"
        type="checkbox"
        className="nav-toggle"
        aria-controls="mobile-nav"
      />

      <div className="site-header-bar relative z-[70] flex h-16 w-full items-center justify-between gap-6 px-4 sm:h-[4.75rem] sm:px-8 lg:px-12">
        <Link href="/" className="nav-brand flex min-w-0 items-center gap-3">
          <span className="nav-mark" aria-hidden>
            MB
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-[1.05rem] tracking-wide text-[color:var(--cream)] sm:text-lg">
              Mel Beaute
            </span>
            <span className="block text-[0.62rem] uppercase tracking-[0.28em] text-[#f3e0a8]">
              Aesthetic
            </span>
          </span>
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="nav-links hidden items-center md:flex" aria-label="Primary">
          {links.map((link, index) => (
            <span key={link.href} className="flex items-center">
              {index > 0 ? <span className="nav-gem" aria-hidden /> : null}
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </span>
          ))}
          <a
            href={site.whatsappMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-book"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#128C7E]" />
            Book on WhatsApp
          </a>
        </nav>

        <label
          htmlFor="nav-toggle"
          className="nav-burger inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--cream)]/80 text-[color:var(--berry)] md:hidden"
        >
          <Menu className="nav-icon-open h-5 w-5" aria-hidden />
          <X className="nav-icon-close h-5 w-5" aria-hidden />
          <span className="sr-only">Open menu</span>
        </label>
      </div>

      <label htmlFor="nav-toggle" className="nav-backdrop" aria-hidden />

      <nav id="mobile-nav" className="side-menu" aria-label="Mobile">
        <div className="flex items-center justify-between px-5 pb-2 pt-5">
          <p className="font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)]">
            Menu
          </p>
          <label
            htmlFor="nav-toggle"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[color:var(--blush)] text-[color:var(--berry)]"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </label>
        </div>

        <div className="flex flex-col gap-1 px-3 pb-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-lg text-[color:var(--ink)]"
            >
              {link.label}
            </Link>
          ))}

          <p className="mt-4 px-3 text-xs uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
            Catalog
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 px-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`/#treatments`}
                data-treatment={s.id}
                className="rounded-xl bg-[color:var(--blush)]/70 px-3 py-3 text-sm text-[color:var(--berry)]"
              >
                {s.catalog}
              </a>
            ))}
          </div>

          <a
            href={site.whatsappMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--berry)] px-4 py-3.5 text-sm font-medium text-[color:var(--cream)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book on WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
