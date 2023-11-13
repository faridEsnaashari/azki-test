import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
      },
      fontFamily: {
        bnazanin: ["var(--font-b-nazanin)"],
      },
      transitionProperty: {
        "max-h": "max-height",
        color: "color",
      },
      colors: {
        aside: {
          bg: "#fffbeb",
        },
      },
    },
  },
} as Config;
