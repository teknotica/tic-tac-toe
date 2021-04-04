import { css } from "@emotion/react";

export default () => ({
  root: css`
    height: 100%;
    display: grid;
    grid-template-rows: 50px 90px minmax(auto, 400px);
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
});
