import { css, Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      html {
        -webkit-text-size-adjust: 100%;
      }
      body {
        font-family: "Playfair Display", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
      }
      html,
      body,
      #root {
        height: 100%;
      }
      h1,
      h2 {
        margin: 0;
      }
    `}
  />
);
