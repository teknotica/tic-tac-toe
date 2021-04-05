import { css } from "@emotion/react";

export default () => ({
  button: (iswinnercell) => css`
    font-family: "Playfair Display";
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1px solid lightgray;
    background-color: transparent;

    ${iswinnercell &&
    css`
      border-color: #784976;
      border-style: dashed;
    `}

    &::before {
      font-size: 4rem;
    }
  `,
});
