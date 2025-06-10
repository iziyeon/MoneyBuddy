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
        primary: '#6790FF',
        sub1: '#BC64FF',
        sub2: '#FF6488',
        error: '#FF373A',
        warning: '#FFCB64',
        back: '#F5F5F5',
        stroke: '#E6E6E6',
        font1: '#191F28',
        font2: '#4E5968',
        font3: '#8B95A1',
        disabled: '#DBDBDB',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        h1: ['24px', { lineHeight: '1.5', fontWeight: '600' }],
        h2: ['20px', { lineHeight: '1.5', fontWeight: '600' }],
        h3: ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        h4: ['14px', { lineHeight: '1.5', fontWeight: '600' }],
        b1: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        b2: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        b3: ['12px', { lineHeight: '1.5', fontWeight: '400' }],
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
