import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
        "2xsm": "345px",
      },
      fontFamily: {
        bnazanin: ["var(--font-b-nazanin)"],
      },
      transitionProperty: {
        "max-h": "max-height",
        color: "color, background-color",
      },
      colors: {
        aside: {
          bg: "#fffbeb",
        },
      },
    },
  },
} as Config;
