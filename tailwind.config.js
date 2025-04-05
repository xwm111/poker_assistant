/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h2: {
              color: '#111827',
              fontWeight: '600',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              backgroundColor: '#D1D5DB',
            },
            strong: {
              color: '#111827',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 