import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock3, Star, Heart } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, values, services } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description:
    "Learn about Mel Beaute & Aesthetic in Taman Desa, KL — friendly aesthetic care, advanced treatments, and WhatsApp booking.",
};

const pillars = [
  {
    title: "Your skin, our priority",
    text: "Every visit starts with listening. We match Pico, laser, threads, injectables, and drips to your real skin goals — not a one-size package push.",
  },
  {
    title: "Warm, careful hands",
    text: "Guests come back for the results and the people. Reviewers often mention Jessie, Lily, Skye, Atika, and Shasha for patience, clarity, and gentle care.",
  },
  {
    title: "Clinic-ready technology",
    text: "From pico and CO₂ laser to HIFU, mesolipo, BToX, and fillers — treatments are delivered in a clean suite with clear aftercare guidance.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="atmosphere relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="hero-sheen absolute inset-0" />
        <div className="pointer-events-none absolute -right-8 top-20 opacity-50">
          <Image
            src="/brand/floral.svg"
            alt=""
            width={220}
            height={220}
            className="h-40 w-40 rotate-12 sm:h-52 sm:w-52"
          />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-script)] text-2xl text-[color:var(--berry)] sm:text-3xl">
            About us
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[color:var(--ink)] sm:text-5xl">
            {site.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
            An appointment-only aesthetic clinic in Taman Desa, Kuala Lumpur —
            with Johor Bahru care on request. We help you rejuvenate, lift, and
            renew with honest advice and WhatsApp-easy booking.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--berry)] px-6 py-3.5 text-sm font-semibold text-[color:var(--cream)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <Link
              href="/#treatments"
              className="inline-flex items-center rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--cream)]/70 px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)]"
            >
              Browse treatments
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl">
              Beauty care that feels personal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
              Mel Beaute & Aesthetic exists for guests who want visible skin and
              body results without a cold clinical vibe. Our home base is{" "}
              <strong className="font-medium text-[color:var(--ink)]">
                5-1, Jalan 1/109F, Taman Danau Desa
              </strong>
              , and we also serve clients in Johor Bahru by appointment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
              On Google Maps we hold a{" "}
              <strong className="font-medium text-[color:var(--ink)]">
                {site.rating}★ rating from {site.reviewCount} reviews
              </strong>
              — guests praise friendly therapists, clean rooms, fair pricing,
              and treatments they can feel and see.
            </p>
            <p className="mt-4 font-[family-name:var(--font-script)] text-2xl text-[color:var(--gold-deep)]">
              {site.slogan}
            </p>
          </div>

          <div className="rounded-[2rem] bg-[color:var(--blush)]/45 p-6 ring-1 ring-[color:var(--gold)]/25 sm:p-8">
            <div className="flex items-center gap-2 text-[color:var(--gold-deep)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[color:var(--berry)]">
              {site.rating}
              <span className="ml-2 text-base text-[color:var(--ink-soft)]">
                / 5 · {site.reviewCount} Google reviews
              </span>
            </p>
            <blockquote className="mt-5 text-sm leading-relaxed text-[color:var(--ink)] sm:text-base">
              “I’ve been coming here for almost a year now, and every visit has
              been consistently good. The place is nice, clean, and comfortable.
              The staff are easy to communicate with and they really understand
              what I want.”
            </blockquote>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
              Google review
            </p>
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-medium text-[color:var(--berry)] underline-offset-4 hover:underline"
            >
              Read more on Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--gold)]/20 bg-[color:var(--cream)] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl">
            What we stand for
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-[1.5rem] bg-[color:var(--blush)]/35 p-5 ring-1 ring-[color:var(--gold)]/20"
              >
                <Heart className="h-5 w-5 text-[color:var(--berry)]" />
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {p.text}
                </p>
              </article>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-[color:var(--gold)]/25 bg-white/50 px-4 py-4"
              >
                <p className="font-medium text-[color:var(--ink)]">{v.title}</p>
                <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
                  {v.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl">
            What we offer
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[color:var(--ink-soft)]">
            The same catalog you see on WhatsApp — open any category to view
            promo pricing, then book in chat.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.id}
                href="/#treatments"
                className="rounded-2xl bg-[color:var(--blush)]/50 px-4 py-4 text-center ring-1 ring-[color:var(--gold)]/20 transition-colors hover:bg-[color:var(--blush)]"
              >
                <span className="font-[family-name:var(--font-script)] text-lg text-[color:var(--gold-deep)]">
                  {s.catalog}
                </span>
                <span className="mt-1 block text-sm text-[color:var(--ink)]">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {site.locations.map((loc) => (
            <article
              key={loc.id}
              className="rounded-[1.75rem] bg-[color:var(--cream)] p-6 ring-1 ring-[color:var(--gold)]/25 sm:p-7"
            >
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[color:var(--berry)]" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">
                    {loc.label}
                  </h3>
                  <p className="text-sm text-[color:var(--gold-deep)]">
                    {loc.area}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    {loc.address}
                  </p>
                  {loc.maps ? (
                    <a
                      href={site.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-[color:var(--berry)] underline-offset-4 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  ) : (
                    <a
                      href={site.whatsappMessage(`${loc.label} location`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-[color:var(--berry)] underline-offset-4 hover:underline"
                    >
                      Ask on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          <article className="rounded-[1.75rem] bg-[linear-gradient(160deg,var(--berry),#5a1830)] p-6 text-[color:var(--cream)] sm:p-7 lg:col-span-2">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-[family-name:var(--font-script)] text-2xl text-[color:var(--gold)]">
                  By appointment only
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
                  Ready when you are
                </h3>
                <div className="mt-4 flex items-start gap-3 text-sm text-[color:var(--cream)]/85">
                  <Clock3 className="mt-0.5 h-5 w-5 text-[color:var(--gold)]" />
                  <div>
                    {site.hours.map((h) => (
                      <p key={h.day}>
                        {h.day}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href={site.whatsappMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--cream)] px-5 py-3.5 text-sm font-semibold text-[color:var(--berry)]"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                Book via WhatsApp
              </a>
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
