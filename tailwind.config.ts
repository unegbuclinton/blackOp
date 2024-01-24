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
        black: '#000',
        white: '#fff',
        secondary: '#0ade93',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'light-gradient':
          'linear-gradient(90deg, rgba(222, 222, 222, 0.00) 0%, #D6D6D6 22.44%, rgba(214, 214, 214, 0.59) 77.87%, rgba(222, 222, 222, 0.00) 100%)',
      },
      boxShadow: {
        xl: 'box-shadow: 0px 0px 25px -4px rgba(70.99999999999999, 103.00000000000013, 232, 0.35);',
      },
    },
  },
  plugins: [],
}
export default config
