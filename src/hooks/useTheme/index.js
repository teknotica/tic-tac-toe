import { PLAYER_A, PLAYER_B } from "../../const";

export default () => ({
  playersConfig: {
    [PLAYER_A]: {
      color: "#168db2",
      tag: "O",
    },
    [PLAYER_B]: {
      color: "#ec5bed",
      tag: "X",
    },
  },
});
