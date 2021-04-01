import { css } from "@emotion/react";

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
    button: ({ playedByA, playedByB }) => css`
      cursor: pointer;
      width: 100%;
      height: 100%;

      ${playedByA &&
      css`
        background-color: red;
      `}

      ${playedByB &&
      css`
        background-color: green;
      `}
    `,
  };
};
