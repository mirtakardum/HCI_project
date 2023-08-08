/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'space': ['"Space Grotesk"', 'monospace'],
        'retro': ['"Press Start 2P"', 'cursive']
      },
      colors: {
        dark: '#11112B',
        light: '#A7AFCC'
      },
      colors: {
        dark: '#11112B',
        light: '#A7AFCC',
        babyblue: '#92DEED',
        navy: '#39394E',
        lime: '#00FFE0'
      },
    },
  },
  plugins: [],
}
