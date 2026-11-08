import Image from "next/image";
import {
  formatRM,
  services,
  site,
  type PriceLine,
  type ServiceCategory,
} from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

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
  return (
    <section
      id="treatments"
      className="relative z-10 scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
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

        {/* Native radio tabs: work without client JS / hydration */}
        <div className="treatment-tabs relative z-20 mt-8 sm:mt-10">
          {services.map((s, i) => (
            <input
              key={`input-${s.id}`}
              type="radio"
              name="treatment-category"
              id={`treatment-${s.id}`}
              value={s.id}
              defaultChecked={i === 0}
              className="treatment-tab-input peer"
              data-tab={s.id}
            />
          ))}

          <div
            className="relative z-20 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
            role="tablist"
            aria-label="Treatment categories"
          >
            {services.map((s) => (
              <label
                key={`label-${s.id}`}
                htmlFor={`treatment-${s.id}`}
                id={s.id}
                className="treatment-tab-label relative z-20 shrink-0 cursor-pointer scroll-mt-28 rounded-full bg-[color:var(--blush)]/80 px-4 py-2.5 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--blush)]"
              >
                {s.catalog}
              </label>
            ))}
          </div>

          <div className="relative z-10 mt-4 rounded-[2rem] bg-[color:var(--blush)]/40 px-3 py-4 sm:mt-6 sm:px-6 sm:py-6 md:px-8">
            {services.map((s) => (
              <div
                key={`panel-${s.id}`}
                className="treatment-panel"
                data-panel={s.id}
                role="tabpanel"
                aria-labelledby={s.id}
              >
                <ServicePanel service={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
