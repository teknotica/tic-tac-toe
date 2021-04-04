import { CircleIcon, EquisIcon } from "../Icons";

const GridItem = ({ ...props }) => {
  const { playedbya, playedbyb } = props;

  return (
    <button {...props}>
      {!!playedbya && <CircleIcon />}
      {!!playedbyb && <EquisIcon />}
    </button>
  );
};

export default GridItem;
