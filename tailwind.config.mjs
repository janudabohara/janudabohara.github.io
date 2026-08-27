/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FBF8F2', soft: '#F4EFE6', ink: '#171714',
        'ink-secondary': '#555149', 'ink-muted': '#777168',
        surface: 'rgba(255,255,255,.62)', hairline: '#E9E1D4',
        peach: '#EACDBA', sage: '#D9DED1'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
