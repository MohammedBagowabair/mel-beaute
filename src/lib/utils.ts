import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix for GitHub project pages. Empty on the dev server and user sites. */
export function withBase(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base || !path.startsWith("/")) return path;
  return `${base}${path}`;
}
