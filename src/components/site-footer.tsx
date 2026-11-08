import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { withBase } from "@/lib/utils";
import { CatalogLinks } from "@/components/catalog-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--gold)]/25 bg-[color:var(--ink)] text-[color:var(--cream)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src={withBase("/brand/logo.svg")}
            alt={site.name}
            width={140}
            height={80}
            className="h-14 w-auto brightness-110"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[color:var(--cream)]/70">
            {site.slogan}. Aesthetic care in Kuala Lumpur & Johor Bahru —
            booked on WhatsApp.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-medium text-[color:var(--gold)] hover:text-[color:var(--cream)]"
          >
            About us
          </Link>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Catalog
          </p>
          <CatalogLinks />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--cream)]/80">
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp chat
              </a>
            </li>
            <li>
              <a href={site.maps} target="_blank" rel="noopener noreferrer">
                Google Maps · Taman Desa, KL
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-[color:var(--cream)]/50 sm:px-6">
        © 2026 {site.name}. Prices are promotional and subject to confirmation.
      </div>
    </footer>
  );
}
