"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  formatRM,
  services,
  site,
  type PriceLine,
  type ServiceCategory,
} from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

function PriceBits({ prices }: { prices: PriceLine[] }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      {prices.map((p, i) => {
        if (p.kind === "single") {
          return (
            <span key={i} className="inline-flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-display)] text-lg text-[color:var(--berry)]">
                {formatRM(p.promo)}
              </span>
              {p.normal ? (
                <span className="text-sm text-[color:var(--ink-soft)] line-through">
                  {formatRM(p.normal)}
                </span>
              ) : null}
            </span>
          );
        }
        const label = p.kind === "pack" ? p.sessions : p.label;
        return (
          <span key={i} className="inline-flex items-baseline gap-1.5">
            <span className="text-xs uppercase tracking-[0.14em] text-[color:var(--ink-soft)]">
              {label}
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg text-[color:var(--berry)]">
              {formatRM(p.promo)}
            </span>
            {"normal" in p && p.normal ? (
              <span className="text-sm text-[color:var(--ink-soft)] line-through">
                {formatRM(p.normal)}
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

function ServicePanel({ service }: { service: ServiceCategory }) {
  return (
    <div className="px-1 py-2 sm:px-2 sm:py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 128px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-[family-name:var(--font-script)] text-xl text-[color:var(--gold-deep)] sm:text-2xl">
            {service.catalog}
          </p>
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)] sm:text-3xl">
            {service.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--ink-soft)] sm:text-base">
            {service.blurb}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.focus.map((f) => (
              <li
                key={f}
                className="rounded-full border border-[color:var(--gold)]/35 bg-[color:var(--cream)] px-3 py-1 text-xs tracking-wide text-[color:var(--ink-soft)]"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mt-6 divide-y divide-[color:var(--blush-deep)]/40 rounded-[1.5rem] bg-[color:var(--cream)]/80 ring-1 ring-[color:var(--gold)]/20">
        {service.treatments.map((t) => (
          <li
            key={t.name}
            className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
          >
            <div className="min-w-0">
              <p className="font-medium text-[color:var(--ink)]">{t.name}</p>
              {t.detail ? (
                <p className="mt-0.5 text-sm text-[color:var(--ink-soft)]">
                  {t.detail}
                </p>
              ) : null}
              <div className="mt-2 sm:hidden">
                <PriceBits prices={t.prices} />
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <div className="hidden sm:block">
                <PriceBits prices={t.prices} />
              </div>
              <a
                href={site.whatsappMessage(t.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--berry)] px-3 py-2 text-xs font-medium text-[color:var(--cream)] transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Book
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-[color:var(--ink-soft)]">
        Promo prices from clinic flyers. Final quote confirmed on WhatsApp — by
        appointment only.
      </p>
    </div>
  );
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active =
    services.find((s) => s.id === activeId) ?? services[0];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (services.some((s) => s.id === hash)) {
        setActiveId(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selectTab = (id: string) => {
    setActiveId(id);
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, "", url);
  };

  return (
    <section
      id="treatments"
      className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl md:text-5xl">
            Treatments from the WhatsApp catalog
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
            Pico, Laser, Nose Thread, Mesolipo, Skinz, Drips Whitening, BToX,
            and Dermal Fillers — tap a category, then book on WhatsApp.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Treatment categories"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:mt-10 sm:flex-wrap sm:overflow-visible"
        >
          {services.map((s) => {
            const selected = activeId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(s.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                  selected
                    ? "bg-[color:var(--berry)] text-[color:var(--cream)] shadow-[0_10px_20px_-12px_rgba(122,36,58,0.8)]"
                    : "bg-[color:var(--blush)]/80 text-[color:var(--ink)] hover:bg-[color:var(--blush)]",
                )}
              >
                {s.catalog}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-4 rounded-[2rem] bg-[color:var(--blush)]/40 px-3 py-4 sm:mt-6 sm:px-6 sm:py-6 md:px-8"
        >
          <ServicePanel key={active.id} service={active} />
        </div>
      </div>
    </section>
  );
}
