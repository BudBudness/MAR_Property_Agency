import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        mar: {
          green: '#0f6b3d',
          dark: '#10231a',
          gold: '#c59b45',
          soft: '#f4f8f5',
        },
      },
    },
  },
  plugins: [],
};

export default config;
