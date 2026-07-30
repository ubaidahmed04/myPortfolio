import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function scrollToId(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
