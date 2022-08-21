import { css } from "@emotion/react";

export const styles = {
  button: (iswinnercell) => css`
    font-family: "Playfair Display";
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-color: transparent black black transparent;
    border-width: 0 2px 2px 0;
    background-color: transparent;

    svg {
      display: inline-block;
    }

    ${iswinnercell &&
    css`
      background-color: #91eb95;
    `}

    &::before {
      font-size: 4rem;
    }

    &:not([disabled]):hover {
      background-color: rgb(145 235 149 / 10%);
    }
  `,
};
