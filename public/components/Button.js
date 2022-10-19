import { styled } from "../../stiches.config";

export const Button = styled("button", {
  padding: "$1 $2",
  fontSize: "$3",
  borderRadius: "$rounded",
  boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  '&:active': {
    boxShadow: 'none',
    fontSize: "15px"
  },

  variants: {
    size: {
      large: {
        padding: "$3 $3",

      },
      small: {
        padding: "4px 8px",
        fontSize: "$2",
        '&:active': {
          fontSize: "13px"
        },
      }
    },

    color: {
      solid: {
        backgroundColor: "$main",
        color: "$black",
        border: "transparent 1px solid",
      },
      outline: {
        backgroundColor: "transparent",
        color: "$main",
        border: "$main 1px solid"
      }

    }

  }


})

