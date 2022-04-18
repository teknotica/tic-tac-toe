import { css } from "@emotion/react";

export const styles = {
  root: css`
    height: 100%;
    display: grid;
    grid-template-rows: 50px 90px minmax(auto, 400px);
    justify-content: center;
    align-content: center;
    text-align: center;
    background-color: #f3e7de;
  `,
  currentlyPlaying: css`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.625rem;
    margin-top: 1rem;
  `,
  text: css`
    text-align: right;
  `,
  icon: css`
    text-align: left;
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(3, minmax(90px, 115px));
  `,
  row: css`
    display: grid;
    grid-template-rows: repeat(3, minmax(90px, 115px));
  `,
};
