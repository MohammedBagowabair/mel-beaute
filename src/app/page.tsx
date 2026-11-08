import Image from "next/image";
import { ShieldCheck, Sparkles, Stethoscope, Leaf } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ServicesSection } from "@/components/services-section";
import { ReviewsSection } from "@/components/reviews-section";
import { VisitSection } from "@/components/visit-section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, values } from "@/lib/site";

const valueIcons = [ShieldCheck, Sparkles, Stethoscope, Leaf];

export default function Home() {
  return (
    <SiteShell>
      <div id="top">
        <section className="atmosphere relative min-h-[100svh] overflow-hidden">
          <div className="hero-sheen absolute inset-0" />
          <div className="petal-drift" aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="petal"
                style={{
                  left: `${8 + i * 11}%`,
                  animationDuration: `${14 + (i % 5) * 2.5}s`,
                  animationDelay: `${i * 1.4}s`,
                  width: `${8 + (i % 3) * 3}px`,
                  height: `${12 + (i % 3) * 4}px`,
                }}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute -left-10 bottom-16 opacity-50 sm:left-0 sm:opacity-70">
            <Image
              src="/brand/floral.svg"
              alt=""
              width={280}
              height={280}
              className="h-44 w-44 sm:h-64 sm:w-64"
              priority
            />
          </div>
          <div className="pointer-events-none absolute -right-8 top-24 opacity-45 sm:right-4 sm:opacity-65">
            <Image
              src="/brand/floral.svg"
              alt=""
              width={240}
              height={240}
              className="h-36 w-36 rotate-180 sm:h-52 sm:w-52"
              priority
            />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-4 pb-24 pt-28 text-center sm:px-6 sm:pb-28 sm:pt-32">
            <Image
              src="/brand/logo.svg"
              alt={site.name}
              width={220}
              height={126}
              className="reveal-up h-24 w-auto sm:h-32 md:h-36"
              priority
            />

            <p className="reveal-up-delay mt-5 font-[family-name:var(--font-script)] text-2xl text-[color:var(--berry)] sm:text-3xl md:text-4xl">
              {site.tagline}
            </p>

            <h1 className="reveal-up-delay mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[1.85rem] leading-tight text-[color:var(--ink)] sm:text-4xl md:text-5xl">
              {site.mantra}
            </h1>

            <p className="reveal-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
              Aesthetic care in Taman Desa, KL — Pico, Laser, Threads,
              Mesolipo, Skinz, Drips, BToX & Fillers. Book by WhatsApp.
            </p>

            <div className="reveal-up-delay-2 mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <a
                href={site.whatsappMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--berry)] px-6 py-3.5 text-sm font-semibold text-[color:var(--cream)] shadow-[0_18px_36px_-18px_rgba(122,36,58,0.85)] transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--cream)]/55 px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] backdrop-blur-sm transition-colors hover:bg-[color:var(--cream)]"
              >
                View treatments
              </a>
            </div>

            <div className="reveal-up-delay-2 mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
              <span>
                {site.rating}★ Google · {site.reviewCount} reviews
              </span>
              <span
                className="hidden text-[color:var(--gold)] sm:inline"
                aria-hidden
              >
                •
              </span>
              <span>By appointment only</span>
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--gold)]/20 bg-[color:var(--cream)] px-4 py-12 sm:px-6 sm:py-14">
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={value.title} className="text-center sm:text-left">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--blush)]/70 text-[color:var(--berry)] sm:mx-0">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-lg text-[color:var(--ink)]">
                    {value.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <ServicesSection />
        <div className="gold-rule mx-auto max-w-4xl" />
        <ReviewsSection />
        <div className="gold-rule mx-auto max-w-4xl" />
        <VisitSection />
      </div>
    </SiteShell>
  );
}
