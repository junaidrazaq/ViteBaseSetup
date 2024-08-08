/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const { colors: defaultColors } = require("tailwindcss/colors");

const colors = {
  ...defaultColors,
  ...{
    primary: {
      500: "#0C6B8A",
      400: "#549CAE",
      300: "#8BB6C3",
      200: "#C1D0D8",
      100: "#E3EBEF",
      50: "#F0F5F6",
    },
    secondary: {
      500: "#048870",
      400: "#62A88F",
      300: "#A3C4AB",
      200: "#D0DDD4",
      100: "#EBF3F2",
      50: "#F6FAFA",
    },
    brown: {
      50: "#f9f4f2",
      100: "#f5e7df",
      200: "#ecc4b3",
      300: "#e4a687",
      400: "#da8e62",
      500: "#c96b3d",
    },
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colors,
      boxShadow: {
        primary: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        heartBeat: {
          "0%": { transform: "scale(1);" },
          "14%": { transform: "scale(1.3);" },
          "28%": { transform: "scale(1);" },
          "42%": { transform: "scale(1.3);" },
          "70%": { transform: "scale(1);" },
        },
        flipHorizontal: {
          "50%": { transform: "rotateY(180deg)" },
        },
        flipVertical: {
          "50%": { transform: "rotateX(180deg)" },
        },
        swing: {
          "20%": {
            transform: "rotate3d(0, 0, 1, 15deg)",
          },

          "40%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },

          "60%": {
            transform: "rotate3d(0, 0, 1, 5deg)",
          },

          "80%": {
            transform: "rotate3d(0, 0, 1, -5deg)",
          },
          to: {
            transform: "rotate3d(0, 0, 1, 0deg)",
          },
        },
        rubberBand: {
          from: {
            transform: "scale3d(1, 1, 1)",
          },

          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },

          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },

          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },

          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },

          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          to: {
            transform: "scale3d(1, 1, 1)",
          },
        },
        flash: {
          "25%, 40%": { opacity: "0" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0" },
        },
        headShake: {
          "0%": {
            transform: "translateX(0)",
          },
          "6.5%": {
            transform: "translateX(-6px) rotateY(-9deg)",
          },

          "18.5%": {
            transform: "translateX(5px) rotateY(7deg)",
          },

          "31.5%": {
            transform: "translateX(-3px) rotateY(-5deg)",
          },

          "43.5%": {
            transform: "translateX(2px) rotateY(3deg)",
          },
          "50%": {
            transform: "translateX(0)",
          },
        },
        wobble: {
          from: {
            transform: "translate3d(0, 0, 0)",
          },

          "15%": {
            transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
          },

          "30%": {
            transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
          },

          "45%": {
            transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
          },

          "60%": {
            transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
          },

          "75%": {
            transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          },

          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
        jello: {
          "from, 11.1%,to": {
            transform: "translate3d(0, 0, 0)",
          },

          "22.2%": {
            transform: "skewX(-12.5deg) skewY(-12.5deg)",
          },

          "33.3%": {
            transform: "skewX(6.25deg) skewY(6.25deg)",
          },

          "44.4%": {
            transform: "skewX(-3.125deg) skewY(-3.125deg)",
          },

          "55.5%": {
            transform: "skewX(1.5625deg) skewY(1.5625deg)",
          },

          "66.6%": {
            transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
          },

          "77.7%": {
            transform: "skewX(0.390625deg) skewY(0.390625deg)",
          },

          "88.8%": {
            transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        heartBeat: "heartBeat 9s infinite",
        hflip: "flipHorizontal 7s infinite",
        vflip: "flipVertical 3s infinite",
        swing: "swing 8s ease-out infinite",
        rubberBand: "rubberBand 6s infinite",
        flash: "flash 2s infinite",
        headShake: "headShake 2s infinite",
        wobble: "wobble 1s infinite",
        jello: "jello 8s ease-in-out 5",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
