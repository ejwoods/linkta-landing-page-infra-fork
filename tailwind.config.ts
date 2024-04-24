import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: 'selector', // enable this for manually toggling dark mode
  theme: {
    screens: {
      // defaults from https://tailwindcss.com/docs/theme
      sm: '431px', // 430px is the width of the iPhone 14 Pro Max
      // We currently have web and mobile breakpoints
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter, sans-serif'],
      serif: ['EB Garamond'],
    },
    extend: {
      colors: {
        light: {
          primary: '#1a202c',
          secondary: '#f2b034',
          tertiary: '#43a677',
          accent: '#f19a2e',
          background: '#FEF5EA',
          text: '#184123',
          muted: '',
          link: '#91d9bf',
          border: '#3d5b50',
          placeholder: '',
          hover: '',
          active: '',
          error: '',
          success: '',
          warning: '#d9580d',
          info: '',
          transparent: 'transparent',
          current: 'currentColor',
          black: '#2c1d15',
          white: '#fdfefe',
        },
        dark: {
          primary: '#013b3f',
          secondary: '#096766',
          tertiary: '#012c2f',
          accent: '#ffa51b',
          background: '#013B3F',
          text: '#EAF0EB',
          muted: '#e6ebec',
          link: '',
          border: '#938F99',
          placeholder: '',
          icon: '',
          hover: '#013539',
          active: '#012f32',
          error: '',
          success: '',
          warning: '#d9580d',
          info: '',
          transparent: 'transparent',
          current: 'currentColor',
          black: '#2c1d15',
          white: '#fdfefe',
        },
      },
    },
  },
  plugins: [],
};
export default config;
