/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { PeachIcon, WatermelonIcon } from "../Icons";
import useStyles from "./styles";

export const GridItem: FC<Props> = ({
  id,
  iswinnercell,
  playedbya,
  playedbyb,
  ...props
}) => {
  const styles = useStyles();

  return (
    <button css={styles.button(!!iswinnercell)} {...props}>
      {!!playedbya && <WatermelonIcon id={id} />}
      {!!playedbyb && <PeachIcon id={id} />}
    </button>
  );
};

type BooleanNumber = 0 | 1;

type Props = {
  id: string;
  disabled: boolean;
  onClick: () => void;
  iswinnercell: BooleanNumber;
  playedbya: BooleanNumber;
  playedbyb: BooleanNumber;
};
