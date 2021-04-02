import { useMemo } from "react";
import { css } from "@emotion/react";

import { PLAYER_A, PLAYER_B } from "./index";

export default () => {
  const playersConfig = useMemo(() => {
    return {
      [PLAYER_A]: {
        tag: "X",
        color: "#168db2",
      },
      [PLAYER_B]: {
        tag: "O",
        color: "#ec5bed",
      },
    };
  }, []);

  return {
    root: css`
      height: 100%;
      display: grid;
      grid-template-rows: 50px 50px minmax(auto, 500px);
      justify-content: center;
      align-items: center;
      background-color: #f3e7de;
    `,
    header: css``,
    grid: css`
      display: grid;
      grid-template-columns: repeat(3, minmax(90px, 115px));
    `,
    row: css`
      display: grid;
      grid-template-rows: repeat(3, minmax(90px, 115px));
    `,
    cell: css``,
    button: (winnerPlayer, isWinnerCell) => css`
      font-family: "Playfair Display";
      position: relative;
      cursor: pointer;
      width: 100%;
      height: 100%;

      ${isWinnerCell &&
      css`
        background-color: #f1e1ff;

        &::before {
          content: "${playersConfig[winnerPlayer].tag}";
          color: ${playersConfig[winnerPlayer].color};
        }
      `}

      &::before {
        font-size: 4rem;
      }

      &.${PLAYER_A} {
        &::before {
          content: "${playersConfig[PLAYER_A].tag}";
          color: ${playersConfig[PLAYER_A].color};
        }
      }

      &.${PLAYER_B} {
        &::before {
          content: "${playersConfig[PLAYER_B].tag}";
          color: ${playersConfig[PLAYER_B].color};
        }
      }
    `,
  };
};
