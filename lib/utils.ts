import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBackgroundTheme(theme: string) {
  const themes = {
    // Light & Clean Themes
    white: "bg-white",
    "light-gray": "bg-gray-50",
    "warm-cream": "bg-amber-50",
    "cool-blue": "bg-blue-50",
    "mint-fresh": "bg-emerald-50",
    lavender: "bg-purple-50",
    "rose-gold": "bg-rose-50",
    "sky-blue": "bg-sky-50",

    // Dark Themes
    dark: "bg-black",
    charcoal: "bg-gray-900",
    midnight: "bg-slate-900",
    navy: "bg-blue-950",
    "forest-night": "bg-green-950",
    burgundy: "bg-red-950",
    "purple-night": "bg-purple-950",
    steel: "bg-zinc-900",

    // Light Gradient Themes
    sunset: "bg-gradient-to-br from-orange-100 via-pink-100 to-red-100",
    ocean: "bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100",
    forest: "bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100",
    "lavender-dream":
      "bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100",
    "golden-hour":
      "bg-gradient-to-br from-yellow-100 via-orange-100 to-amber-100",
    "cotton-candy":
      "bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100",
    "mint-chocolate":
      "bg-gradient-to-br from-emerald-100 via-teal-100 to-slate-100",
    aurora: "bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100",

    // Dark Gradient Themes
    "deep-space": "bg-gradient-to-br from-gray-950 via-gray-900 to-black",
    "ocean-depth": "bg-gradient-to-br from-blue-950 via-slate-900 to-black",
    "forest-depth": "bg-gradient-to-br from-green-950 via-gray-900 to-black",
    "royal-night": "bg-gradient-to-br from-purple-950 via-slate-900 to-black",
    "sunset-dark": "bg-gradient-to-br from-orange-950 via-red-900 to-black",
    "midnight-blue": "bg-gradient-to-br from-indigo-950 via-blue-900 to-black",
  };

  return themes[theme as keyof typeof themes] || themes.dark;
}
