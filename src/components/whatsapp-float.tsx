"use client";

import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappMessage()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(18,140,70,0.85)] sm:bottom-6 sm:right-6"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="pr-0.5">WhatsApp</span>
    </a>
  );
}
