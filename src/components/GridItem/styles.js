import { css } from "@emotion/react";

export default () => ({
  button: (iswinnercell) => css`
    font-family: "Playfair Display";
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1px solid lightgray;

    ${iswinnercell &&
    css`
      background-color: #91eb95;
    `}

    &::before {
      font-size: 4rem;
    }
  `,
});
