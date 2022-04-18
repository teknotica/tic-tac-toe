/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { PeachIcon, WatermelonIcon } from "../Icons";
import { styles } from "./Cell.styles";

export const Cell: FC<Props> = ({
  id,
  iswinnercell,
  playedbya,
  playedbyb,
  ...props
}) => (
  <button css={styles.button(!!iswinnercell)} {...props}>
    {playedbya && <WatermelonIcon id={id} />}
    {playedbyb && <PeachIcon id={id} />}
  </button>
);

type Props = {
  id: string;
  disabled: boolean;
  onClick: () => void;
  iswinnercell: Boolean;
  playedbya: Boolean;
  playedbyb: Boolean;
};
