/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        //dark_primary: "#06223F",
        dark_primary: "#9B4650",
       // bg_light_primary: "#F5F9FD",
       // bg_light_primary: "#FFD9E1AD",
        bg_light_primary: "#FDEFF1",
        bg_dark_text:"#9B4650",
        bg_dark_primary:"#f26d7d",
       // gray: "#B7C5D3",
        gray: "#8E596494",
      },
      backgroundImage: {
       // primaryLinear: "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)",
        primaryLinear: "linear-gradient(180deg, #f26d7d 0.48%, #FAC3CA 100%)",
      },
      dropShadow: {
       // primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
        primary: "-5px 35px 40px #fdeced",
      },
    },
  },
  plugins: [],
};
