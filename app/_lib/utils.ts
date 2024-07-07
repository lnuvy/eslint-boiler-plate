import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "@/tailwind.config";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["9", "12", "14", "16", "18", "20", "24", "28", "34"] },
      ],
      rounded: [
        {
          rounded: Object.keys(resolveConfig(config as Config).theme.spacing),
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
