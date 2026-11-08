"use client";

import { usePathname } from "next/navigation";
import { services } from "@/lib/site";
import { withBase } from "@/lib/utils";

export function CatalogLinks() {
  const pathname = usePathname();

  return (
    <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-[color:var(--cream)]/80">
      {services.map((s) => (
        <li key={s.id}>
          <a
            href={withBase("/#treatments")}
            className="hover:text-[color:var(--cream)]"
            onClick={(e) => {
              if (pathname !== "/") {
                return;
              }
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
