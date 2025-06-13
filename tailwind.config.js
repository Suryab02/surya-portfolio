export default {
  darkMode: 'class', // ✅ THIS IS REQUIRED
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#cc0000",
      },
    },
  },
  plugins: [],
}
