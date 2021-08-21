import { css } from "@emotion/react";

export default () => ({
  root: css`
    height: 100%;
    display: grid;
    grid-template-rows: 130px minmax(auto, 375px) 40px;
    justify-content: center;
    align-content: center;
    text-align: center;
    background: #b993d6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #8ca6db,
      #b993d6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #8ca6db,
      #b993d6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `,
  header: css`
    text-align: center;
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(3, minmax(90px, 115px));
  `,
  row: css`
    display: grid;
    grid-template-rows: repeat(3, minmax(90px, 115px));

    &:last-child {
      button {
        border-right: none;
      }
    }

    div:last-of-type {
      button {
        border-bottom: none;
      }
    }
  `,
  resetBtn: css`
    border: none;
    background: transparent;
    padding: 0;
    font: inherit;
    font-size: inherit;
    cursor: pointer;
    display: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    text-decoration: underline;
    font-size: 1.3rem;
  `,
});
