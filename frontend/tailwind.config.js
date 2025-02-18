/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        background: 'hsl(224,71%,4%)',
        foreground: 'hsl(213,31%,91%)',
        border: 'hsl(216,34%,17%)',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}