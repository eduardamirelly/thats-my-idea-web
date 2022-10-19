import { createStitches } from "@stitches/react";

export const { css, styled } = createStitches({
  utils: {

  },

    theme: {
      colors:{
        white: "#FFFFFF",
        black: "#1B2223",
        main: "#3DE2C4" ,
        mainLight: "#00FFD1",
        mainDark: "#07806A",
        secundary: "#3A4F50" ,
        secundaryLight: "#284E50",
        secundaryDark: "#253233",
        danger: "#E52E3F",
        gray1: "#F9F9F9",
        gray2: "#EDEDED",
        gray3: "#E1E1E1",
        gray4: "#C4C4C4",
        gray5: "#B3B3B3",
        gray6: "#A0A0A0",
        gray7: "#898989",
        gray8: "#6C6C6C",
        gray9: "#3F3F3F",
        gray10: "#303030",
      },

      sizes: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "20px",
        5: "24px",
        6: "28px",
        7: "32px",
        8: "36px",
        9: "40px",
        10: "44px",
        11: "48px",
        12: "52px",
      },

      space: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "20px",
        5: "24px",
        6: "28px",
        7: "32px",
        8: "36px",
        9: "40px",
        10: "44px",
        11: "48px",
        12: "52px",
      },

      radii: {
        rounded: "8px"
      },

      fonts: {
        1: "Rubik, sans-serif",

      },

      fontSizes: {
        1: "12px",
        2: "14px",
        3: "16px",
        4: "18px",
        5: "20px",
        6: "22px",
        7: "24px",
        8: "28px",
        9: "32px",
        10: "48px",
        11: "56px",
        12: "64px",
      }
    },

    media: {
      bp1: "(max-width: 640px)",
      bp2: "(max-width: 768px)",
      bp3: "(max-width: 1024px)",
    },


  })
