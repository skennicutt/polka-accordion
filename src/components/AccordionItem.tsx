import * as React from "react";
import styled from "styled-components/macro";

interface IProps {
  title: string;
  expanded: boolean;
  content?: JSX.Element | string;
}

const StyledAccordionItem = styled.li`
  & + & {
    border-top: 1px solid #e0e0e0;
  }
`;

const StyledIconDiv = styled.div`
  border-left: 0.2rem grey;

  &:hover {
    background: grey;
  }
`;

const StyledIcon = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC);
  opacity: 0.6;
  &.opened {
    transform: rotate(180deg);
  }
`;

const StyledHeader = styled.div`
  display: flex;
  padding: 0.8rem 1.4rem;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 2;
  position: relative;

  &:hover {
    background: #e0e0e0;
    transition: background 0.2s ease-in-out;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1.6rem;
  margin: 0 1rem 0 0;
  font-weight: 700;
  color: black;
`;

const StyledContent = styled.div`
  max-height: 0;
  overflow: hidden;
  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition-duration: 0.5s;
  transition-property: max-height;
  z-index: 1;
  position: relative;

  &.opened {
    max-height: 100rem;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  }
`;

const StyledContentInner = styled.div`
  opacity: 0;
  transform: translateY(-1rem);
  transition-timing-function: linear, ease;
  transition-duration: 0.1s;
  transition-property: opacity, transform;
  transition-delay: 0.5s;
  padding: 0 1.2rem 1.2rem;

  &.opened {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  }
`;

function AccordionItem(props: IProps) {
  const { content, title, expanded } = props;
  const [showContent, setShowContent] = React.useState(expanded);

  return (
    <StyledAccordionItem
      onClick={() => setShowContent(prevState => !prevState)}
    >
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        {/* <StyledIconDiv> */}
        <StyledIcon className={showContent ? "opened" : ""} />
        {/* </StyledIconDiv> */}
      </StyledHeader>
      <StyledContent className={showContent ? "opened" : ""}>
        <StyledContentInner className={showContent ? "opened" : ""}>
          {content}
        </StyledContentInner>
      </StyledContent>
    </StyledAccordionItem>
  );
}

export default AccordionItem;
