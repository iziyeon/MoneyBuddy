/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  safelist: [
    'text-h1',
    'text-h2',
    'text-h3',
    'text-h4',
    'text-b1',
    'text-b2',
    'text-b3',
    'text-font1',
    'text-font2',
    'text-font3',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6488FF',
        sub1: '#BC64FF',
        sub2: '#FF6488',
        error: '#FF373A',
        warning: '#FFCB64',
        back: '#F5F5F5',
        stroke: '#F1F1F1',
        font1: '#111111',
        font2: '#777777',
        font3: '#9C9C9C',
      },
      fontSize: {
        h1: ['24px', '32px'],
        h2: ['20px', '28px'],
        h3: ['18px', '26px'],
        h4: ['14px', '22px'],
        b1: ['16px', '24px'],
        b2: ['14px', '20px'],
        b3: ['12px', '18px'],
      },
      borderRadius: {
        btn: '4px',
      },
      spacing: {
        screenPadding: '20px',
        btnHeight: '46px',
      },
    },
  },
  plugins: [],
};
