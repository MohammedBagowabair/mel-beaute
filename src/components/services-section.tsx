"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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

function ServicePanel({
  service,
  open,
  onToggle,
}: {
  service: ServiceCategory;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      id={service.id}
      className="scroll-mt-28 border-b border-[color:var(--gold)]/25 last:border-b-0"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start gap-4 py-5 text-left sm:items-center sm:gap-6 sm:py-6"
      >
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl sm:h-20 sm:w-20">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="80px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-[family-name:var(--font-script)] text-lg text-[color:var(--gold-deep)] sm:text-xl">
            {service.catalog}
          </p>
          <h3 className="font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)] sm:text-2xl">
            {service.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[color:var(--ink-soft)] sm:text-base">
            {service.blurb}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "mt-2 h-5 w-5 shrink-0 text-[color:var(--berry)] transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-400 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 sm:pb-8">
            <ul className="mb-5 flex flex-wrap gap-2">
              {service.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-[color:var(--gold)]/35 bg-[color:var(--cream)] px-3 py-1 text-xs tracking-wide text-[color:var(--ink-soft)]"
                >
                  {f}
                </li>
              ))}
            </ul>

            <ul className="divide-y divide-[color:var(--blush-deep)]/40 rounded-[1.5rem] bg-[color:var(--cream)]/70 ring-1 ring-[color:var(--gold)]/20">
              {service.treatments.map((t) => (
                <li
                  key={t.name}
                  className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-[color:var(--ink)]">
                      {t.name}
                    </p>
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
                      className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--berry)]/95 px-3 py-2 text-xs font-medium text-[color:var(--cream)] transition-opacity hover:opacity-90"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      Book
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-xs text-[color:var(--ink-soft)]">
              Promo prices from clinic flyers. Final quote confirmed on WhatsApp
              — by appointment only.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  const [openId, setOpenId] = useState<string>(services[0].id);

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
            and Dermal Fillers — tap a category, then book the exact treatment
            on WhatsApp.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:mt-10 sm:flex-wrap sm:overflow-visible">
          {services.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setOpenId(s.id);
                document
                  .getElementById(s.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm transition-colors",
                openId === s.id
                  ? "bg-[color:var(--berry)] text-[color:var(--cream)]"
                  : "bg-[color:var(--blush)]/70 text-[color:var(--ink)] hover:bg-[color:var(--blush)]",
              )}
            >
              {s.catalog}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-[2rem] bg-[color:var(--blush)]/35 px-3 sm:mt-6 sm:px-6 md:px-8">
          {services.map((service) => (
            <ServicePanel
              key={service.id}
              service={service}
              open={openId === service.id}
              onToggle={() =>
                setOpenId((id) => (id === service.id ? "" : service.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
