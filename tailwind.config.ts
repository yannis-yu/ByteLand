import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Dark Slate (matching JulesGo branding potentially)
        secondary: '#3B82F6', // Blue
      }
    },
  },
  plugins: [],
} satisfies Config