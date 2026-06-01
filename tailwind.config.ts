import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          mid: '#1A3F6F',
          light: '#2E5FA3',
          dark: '#071830',
          50: '#EEF4FF',
        },
        gold: {
          DEFAULT: '#B8935A',
          light: '#D4B483',
          dark: '#9A7A47',
        },
        cream: {
          DEFAULT: '#F8F6F1',
          dark: '#EDE8DF',
          deeper: '#E0D9CC',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1C2B3A',
            a: { color: '#0B2545', textDecoration: 'underline' },
            h2: { fontFamily: 'var(--font-cormorant)', color: '#0B2545' },
            h3: { fontFamily: 'var(--font-cormorant)', color: '#0B2545' },
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
