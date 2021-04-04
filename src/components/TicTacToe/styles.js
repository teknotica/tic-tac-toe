import { css } from "@emotion/react";

export default () => ({
  root: css`
    height: 100%;
    display: grid;
    grid-template-rows: 130px minmax(auto, 375px) 40px;
    justify-content: center;
    align-content: center;
    text-align: center;
    background-color: #f3e7de;
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
