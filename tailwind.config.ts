import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'color1':'#4C4B16',
    //   'color2':'#F6FCDF',
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color1':'#4C4B16',
        'color2':'#F6FCDF',
        'color3':{
          '1' : '#F3F3E0',
          '2' : '#1A1A19'
        },
        
      },
      spacing: {
        '5x' : '5px',
        '15x' : '15px',
        '25x' : '25px',
        '10%' : '10%',
        '30%' : '30%',
      },
    },
  },
  plugins: [
    require('daisyui'),
    
  ],daisyui: {
    themes: ["light", "dark", "lemonade"],
  },
};
export default config;
