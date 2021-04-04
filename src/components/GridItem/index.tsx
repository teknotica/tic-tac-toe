/** @jsxImportSource @emotion/react */
import { CircleIcon, EquisIcon } from "../Icons";
import useStyles from "./styles";

const GridItem = ({ ...props }) => {
  const styles = useStyles();
  const { iswinnercell, playedbya, playedbyb } = props;

  return (
    <button css={styles.button(!!iswinnercell)} {...props}>
      {!!playedbya && <CircleIcon color="#168db2" />}
      {!!playedbyb && <EquisIcon color="#ec5bed" />}
    </button>
  );
};

export default GridItem;
