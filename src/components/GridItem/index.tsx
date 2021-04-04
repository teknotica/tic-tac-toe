/** @jsxImportSource @emotion/react */
import { CircleIcon, EquisIcon } from "../Icons";
import { PLAYER_A, PLAYER_B } from "../../const";
import useTheme from "../../hooks/useTheme";

import useStyles from "./styles";

const GridItem = ({ ...props }) => {
  const styles = useStyles();
  const { playersConfig } = useTheme();
  const { iswinnercell, playedbya, playedbyb } = props;

  return (
    <button css={styles.button(!!iswinnercell)} {...props}>
      {!!playedbya && <CircleIcon color={playersConfig[PLAYER_A].color} />}
      {!!playedbyb && <EquisIcon color={playersConfig[PLAYER_B].color} />}
    </button>
  );
};

export default GridItem;
