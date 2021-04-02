import { css } from "@emotion/react";

import { PLAYER_A, PLAYER_B } from "./index";

export default () => {
  return {
    root: css`
      height: 100%;
      display: grid;
      justify-content: center;
      align-items: center;
    `,
    grid: css`
      display: grid;
      grid-template-columns: repeat(3, 150px);
    `,
    row: css`
      display: grid;
      grid-template-rows: repeat(3, 150px);
    `,
    cell: css``,
    button: css`
      cursor: pointer;
      width: 100%;
      height: 100%;

      &.${PLAYER_A} {
        background-color: red;
      }

      &.${PLAYER_B} {
        background-color: blue;
      }
    `,
  };
};
