import { css } from "@emotion/react";

import { PLAYER_A, PLAYER_B } from "./index";

export default () => {
  return {
    root: css`
      height: 100%;
      display: grid;
      grid-template-rows: 50px 50px minmax(auto, 500px);
      justify-content: center;
      align-items: center;
    `,
    header: css``,
    grid: css`
      display: grid;
      grid-template-columns: repeat(3, 150px);
    `,
    row: css`
      display: grid;
      grid-template-rows: repeat(3, 150px);
    `,
    cell: css``,
    button: (winnerPlayer, isWinnerCell) => {
      return css`
        position: relative;
        cursor: pointer;
        width: 100%;
        height: 100%;

        ${isWinnerCell &&
        css`
          background-color: yellow;

          &::before {
            content: "${winnerPlayer === PLAYER_A ? "X" : "O"}";
            color: ${winnerPlayer === PLAYER_A ? "blue" : "red"};
          }
        `}

        &::before {
          font-size: 3rem;
          transform: translate(50% 50%);
        }

        &.${PLAYER_A} {
          &::before {
            content: "X";
            color: blue;
          }
        }

        &.${PLAYER_B} {
          &::before {
            content: "O";
            color: red;
          }
        }
      `;
    },
  };
};
