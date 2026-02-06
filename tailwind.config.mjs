/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'Fira Code',
          'Menlo',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
      backgroundImage: {
        'fire-glow': 'radial-gradient(circle at 50% 0%, rgba(239, 109, 75, 0.2) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'drift': 'drift 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.5', 'text-shadow': '0 0 20px rgba(239, 109, 75, 0.5)' },
          '50%': { opacity: '1', 'text-shadow': '0 0 30px rgba(239, 109, 75, 0.8)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(239, 109, 75, 0.3)',
        'glow-lg': '0 0 60px rgba(239, 109, 75, 0.2)',
      },
    },
  },
  plugins: [],
};
