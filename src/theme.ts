import chroma from "chroma-js";

const theme = {
  backgroundColor: "#fff",
  colorAccent: "#3978EF",
  colorAccentDarken: chroma("#3978EF")
    .darken(2)
    .css(),
  colorAccentDropShadow: chroma("#3978EF")
    .darken(2)
    .alpha(0.06)
    .css(),
  colorAccentInnerShadow: chroma("#3978EF")
    .darken(2)
    .alpha(0.2)
    .css()
};

export default theme;