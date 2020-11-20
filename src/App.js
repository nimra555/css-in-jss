import React from "react";
import {
  StyledApp,
  StyledAppHeader,
  StyleParagraph,
  StyledAppButton,
  StyledButton
} from "./App.style";

export default function App() {
  return (
    <StyledApp>
      <StyledAppHeader backgroundColor="rgb(51,32,138)">
        <StyledButton
          color="rgb(51, 32, 138)"
          backgroundColor="white"
          borderRadius="40px"
          height="40px"
          fontSize="26px"
        >
          x
        </StyledButton>
      </StyledAppHeader>
      <StyleParagraph>Do you want to save this changes?</StyleParagraph>
      <StyledAppButton>
        <StyledButton width="150px">Save</StyledButton>
        <StyledButton
          width="150px"
          border=" 2px solid rgb(51, 32, 138)"
          backgroundColor="white"
          color="rgb(51, 32, 138)"
        >
          Cancel
        </StyledButton>
      </StyledAppButton>
    </StyledApp>
  );
}
