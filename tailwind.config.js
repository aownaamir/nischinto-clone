/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "nav-blue": "rgba(13, 110, 253,0.1)",
        "nav-blue2": "rgba(191, 219, 254,1)",
        custom_blue: {
          100: "#0d6efd",
        },
        "appointment-blue": "#0cb8b6",
        "appointment-blue-bright": "rgba(12,184,182,0.35)",
        "appointment-blue-light": "rgba(12,184,182,0.05)",
        doctors: "rgba(103,88,243,0.3)",
        service: "rgba(55,175,71,0.3)",
        emergency: "rgba(230,73,45,0.3)",
      },
      backgroundColor: {
        "appointment-blue-light": "rgba(12,184,182,0.05)",
        crutches: {
          900: "#0cb8b6",
          100: "rgba(12,184,182,0.1)",
        },
        xray: {
          900: "#e6492d",
          100: "rgba(230,73,45,0.1)",
        },
        pulmonary: {
          900: "#37af47",
          100: "rgba(55,175,71,0.1)",
        },
        cardiology: {
          900: "#1665d8",
          100: "rgba(22,101,216,0.1)",
        },
        dental: {
          900: "#f6ab2f",
          100: "rgba(246,171,47,0.1)",
        },
        neurology: {
          900: "#9ea0a5",
          100: "rgba(158,160,165,0.1)",
        },
      },
      boxShadow: {
        "custom-light": "0px 0px 10px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0px 2px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
