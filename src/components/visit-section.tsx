import { Clock3, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function VisitSection() {
  return (
    <section
      id="visit"
      className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl md:text-5xl">
            Visit Mel Beaute
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
            Appointment-only care in Kuala Lumpur, with Johor Bahru availability
            on request. Message us to reserve your slot.
          </p>

          <ul className="mt-8 space-y-5">
            {site.locations.map((loc) => (
              <li
                key={loc.id}
                className="rounded-[1.5rem] bg-[color:var(--cream)]/70 p-5 ring-1 ring-[color:var(--gold)]/25"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--berry)]" />
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)]">
                      {loc.label}
                    </p>
                    <p className="text-sm text-[color:var(--gold-deep)]">
                      {loc.area}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                      {loc.address}
                    </p>
                    {loc.maps ? (
                      <a
                        href={site.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-medium text-[color:var(--berry)] underline-offset-4 hover:underline"
                      >
                        Open in Google Maps
                      </a>
                    ) : (
                      <a
                        href={site.whatsappMessage(`${loc.label} location`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-medium text-[color:var(--berry)] underline-offset-4 hover:underline"
                      >
                        Ask on WhatsApp for JB details
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex flex-col justify-between rounded-[2rem] bg-[linear-gradient(160deg,var(--berry),#5a1830)] p-6 text-[color:var(--cream)] shadow-[0_30px_60px_-35px_rgba(90,24,48,0.8)] sm:p-8">
          <div>
            <p className="font-[family-name:var(--font-script)] text-2xl text-[color:var(--gold)]">
              By appointment only
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
              Book your beauty session
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--cream)]/80">
              Tell us the treatment you want — Pico, Laser, Threads, Mesolipo,
              Skinz, Drips, BToX, or Fillers — and our team will guide you.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 text-[color:var(--gold)]" />
                <div className="text-sm">
                  {site.hours.map((h) => (
                    <p key={h.day} className="leading-relaxed">
                      <span className="text-[color:var(--cream)]/70">
                        {h.day}:{" "}
                      </span>
                      {h.time}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[color:var(--gold)]" />
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-lg font-medium tracking-wide"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={site.whatsappMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--cream)] px-5 py-3.5 text-sm font-semibold text-[color:var(--berry)] transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              WhatsApp to book
            </a>
            <div className="flex flex-wrap gap-3 text-sm text-[color:var(--cream)]/80">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--cream)]"
              >
                Instagram {site.instagramHandle}
              </a>
              <span aria-hidden>·</span>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--cream)]"
              >
                TikTok {site.tiktokHandle}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
