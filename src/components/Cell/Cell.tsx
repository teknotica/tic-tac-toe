/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { PeachIcon, WatermelonIcon } from "../Icons";
import { styles } from "./Cell.styles";

export const Cell: FC<Props> = ({
  id,
  isWinnerCell,
  playedByA,
  playedByB,
  ...props
}) => (
  <button css={styles.button(!!isWinnerCell)} {...props}>
    {playedByA && <WatermelonIcon id={id} />}
    {playedByB && <PeachIcon id={id} />}
  </button>
);

type Props = {
  id: string;
  isWinnerCell: boolean;
  playedByA: boolean;
  playedByB: boolean;
  disabled: boolean;
  onClick: () => void;
};
