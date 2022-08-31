/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body: ["Be Vietnam Pro, sans-serif"],
      },
      colors: {
        body: "#f2f2f2",
        mainTextColor: "#242D52",
        linkBg: "#F3603C",
        linkBgHover: "#F98F75",
        boxBg: "#FFF0EC",
        itemColor: "fafafa",
        footerBgColor: "#1D1E25",
      },
      backgroundImage: {
        articleBgImage: "url('/images/article-bg.svg')",
      },
      fontSize:{

      }
    },
  },
  plugins: [],
}
