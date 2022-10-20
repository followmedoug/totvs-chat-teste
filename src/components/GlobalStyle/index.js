import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.background.primary};
    margin: 0;
    padding: 0;
    font-family: "Sagoe UI", Helvetica , Arial, sans-serif;
  }
  
  svg.MuiSvgIcon-root {
    color: ${({ theme: { colors } }) => colors.icon.primary};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
  }
`;

export default GlobalStyle;
