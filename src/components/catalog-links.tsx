"use client";

import { services } from "@/lib/site";

export function CatalogLinks() {
  return (
    <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-[color:var(--cream)]/80">
      {services.map((s) => (
        <li key={s.id}>
          <a
            href="#treatments"
            className="hover:text-[color:var(--cream)]"
            onClick={(e) => {
              e.preventDefault();
              const input = document.getElementById(
                `treatment-${s.id}`,
              ) as HTMLInputElement | null;
              if (input) input.checked = true;
              document
                .getElementById("treatments")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {s.catalog}
          </a>
        </li>
      ))}
    </ul>
  );
}
