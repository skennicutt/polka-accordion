import * as React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import chroma from "chroma-js";

interface IProps {
  children?: string | React.ReactElement | React.ReactElement[];
  className?: string;
}

const theme = {
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

function Accordion(props: IProps) {
  const { className, children } = props;
  return (
    <ThemeProvider theme={theme}>
      <ul className={className}>{children}</ul>
    </ThemeProvider>
  );
}

export const NormalAccordion = styled(Accordion)`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
`;

export const AccordionModal = styled(Accordion)`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  max-width: 30rem;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 0 0.8rem 0.1rem ${props => props.theme.colorAccentDropShadow},
    0 20px 30px -10px ${props => props.theme.colorAccentInnerShadow};
`;

export default Accordion;
