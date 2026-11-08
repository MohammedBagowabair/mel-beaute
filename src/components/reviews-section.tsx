import { Star } from "lucide-react";
import { reviews, site } from "@/lib/site";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-16 top-10 opacity-40 sm:opacity-60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/floral.svg" alt="" className="h-48 w-48 rotate-[-18deg]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl md:text-5xl">
              Loved on Google Maps
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
              Real guests in Taman Desa praise friendly therapists, clean
              suites, and results they can see — then they come back.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-[color:var(--cream)]/80 px-5 py-4 ring-1 ring-[color:var(--gold)]/30">
            <p className="font-[family-name:var(--font-display)] text-4xl text-[color:var(--berry)]">
              {site.rating}
              <span className="ml-1 text-lg text-[color:var(--ink-soft)]">
                / 5
              </span>
            </p>
            <div className="mt-1 flex items-center gap-1 text-[color:var(--gold-deep)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
              {site.reviewCount} Google reviews
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <figure
              key={i}
              className="reveal-card flex h-full flex-col rounded-[1.75rem] bg-[color:var(--cream)]/75 p-5 ring-1 ring-[color:var(--gold)]/20"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex gap-0.5 text-[color:var(--gold-deep)]">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--ink)] sm:text-[0.95rem]">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={site.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-medium text-[color:var(--berry)] underline-offset-4 hover:underline"
          >
            Read more on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
