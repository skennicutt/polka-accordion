import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components/macro";
import "./styles.css";
import {
  AccordionModal,
  NormalAccordion
} from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";
import theme from './theme';

const StyledApp = styled.div`
  min-height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

const FlexedAccordionModal = styled(AccordionModal)`
  flex: 1;
  margin: 1rem;
`;

const FlexedNormalAccordion = styled(NormalAccordion)`
  flex: 1;
  margin: 1rem;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <FlexedAccordionModal>
          <AccordionItem
            title="This is an accordion"
            content="some content here"
            expanded={false}
          />
          <AccordionItem
            title="This is also an accordion"
            content="some content here"
            expanded={false}
          />
        </FlexedAccordionModal>
        <FlexedNormalAccordion>
          <AccordionItem
            title="This is an accordion"
            content="some content here"
            expanded={false}
          />
          <AccordionItem
            title="This is also an accordion"
            content="some content here"
            expanded={false}
          />
        </FlexedNormalAccordion>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
