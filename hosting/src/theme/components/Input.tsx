import tags from "react-elevated-emotion";

export const Input = tags.input({})(({ theme }) => ({
  borderRadius: 8,
  border: "1px solid lightgrey",
  minWidth: 220,
  minHeight: 32,
  maxHeight: 32,
  padding: "10px 15px",
  outline: "none",

  background: "white",
  ":focus": {
    background: "transparent",
  },
}));
