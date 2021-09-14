import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
  }

  html, body {
      overflow-y: hidden;
  }
`;

export default GlobalCss;