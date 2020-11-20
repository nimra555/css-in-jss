import styled, { css } from "styled-components";


export const StyledApp = styled.div`
  text-align: center;
  background-color:rgb(187,223,235);
  min-height: 50vh;
`;

export const StyledAppHeader = styled.header(
  ({ backgroundColor, color }) => css`
    background-color: ${backgroundColor};
    display: flex;
    align-items: center;
    justify-content: flex-end;

    color: ${color};
    height: 50px;
  `
);
export const StyledButton = styled.button(
  () => css`
    color:${(props) => (props.color ? props.color : "white")};
    background: ${(props) => (props.backgroundColor ? props.backgroundColor : "rgb(51, 32, 138)")};
    border:  ${(props) => (props.border ? props.border : "none")};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "5px")};
    width:  ${(props) => (props.width ? props.width : "40px")};
    height:  ${(props) => (props.height ? props.height : "45px")};
    font-weight: bold;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};;
    margin-right: 10px;
    cursor: pointer;
  `
);

export const StyleParagraph = styled.p(
  () => css`
    color: rgb(96, 96, 96);
    font-weight: 700;
  `
);
export const StyledAppButton = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  `
);




