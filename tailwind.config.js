/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "slate-1": "#0F172A",
        "slate-5": "#64748B",
        "slate-6": "#94A3B8",
        "slate-8": "#E2E8F0",
        "slate-9": "#F1F5F9",
        "dark-1": "#142835",
      },
    },
  },
};
