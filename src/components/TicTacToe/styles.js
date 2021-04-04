import { css } from "@emotion/react";
import useTheme from "../../hooks/useTheme";

export default () => {
  const { playersConfig } = useTheme();

  return {
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
    moveShape: (currentPlayer) => css`
      color: ${playersConfig[currentPlayer].color};

      &::before {
        content: "${playersConfig[currentPlayer].tag}";
        font-size: 2rem;
      }
    `,
  };
};
