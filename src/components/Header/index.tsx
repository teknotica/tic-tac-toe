/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { MAX_MOVES, PLAYER_A } from "../../const";
import { Cell, Players } from "../../types";
import { PeachIcon, WatermelonIcon } from "../Icons";
import useStyles from "./styles";

type Props = {
  title: string;
  currentPlayer: Players;
  winnerPlayer: Players | undefined;
  allMoves: Cell[];
};

const Header: FC<Props> = ({
  title,
  currentPlayer,
  winnerPlayer,
  allMoves,
}) => {
  const styles = useStyles();
  const CurrentIcon = currentPlayer === PLAYER_A ? WatermelonIcon : PeachIcon;

  return (
    <div css={styles.header}>
      <h1>{title}</h1>
      {!winnerPlayer && allMoves.length < MAX_MOVES && (
        <h2 css={styles.currentlyPlaying}>
          <span>Currently playing:</span>
          <span css={styles.icon}>
            <CurrentIcon />
          </span>
        </h2>
      )}
      {allMoves.length === MAX_MOVES && !winnerPlayer && (
        <h2>
          No one wins{" "}
          <span role="img" aria-label="Sad face">
            😭
          </span>
        </h2>
      )}
      {winnerPlayer && (
        <h2>
          You win!{" "}
          <span role="img" aria-label="Smiley face">
            😬
          </span>
        </h2>
      )}
    </div>
  );
};

export default Header;
