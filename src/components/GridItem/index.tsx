/** @jsxImportSource @emotion/react */
import { PeachIcon, WatermelonIcon } from "../Icons";
import useStyles from "./styles";

const GridItem = ({ ...props }) => {
  const styles = useStyles();
  const { iswinnercell, playedbya, playedbyb } = props;

  return (
    <button css={styles.button(!!iswinnercell)} {...props}>
      {!!playedbya && <WatermelonIcon />}
      {!!playedbyb && <PeachIcon />}
    </button>
  );
};

export default GridItem;
