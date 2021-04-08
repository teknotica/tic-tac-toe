import { Players } from "../../types";

export default () => ({
  playersConfig: {
    [Players.PlayerA]: {
      color: "#168db2",
      tag: "O",
    },
    [Players.PlayerB]: {
      color: "#ec5bed",
      tag: "X",
    },
  },
});
