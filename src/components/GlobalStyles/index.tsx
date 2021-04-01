import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyles = () => {

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        html {
          -webkit-text-size-adjust: 100%;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          margin: 0;
        }
        html,
        body,
        #root,
        .container,
        #main {
          height: 100%;
        }
      `}
    />
  );
};

export default GlobalStyles;
