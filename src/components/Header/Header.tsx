/** @jsxImportSource @emotion/react */
import { FC } from "react";

import { MAX_MOVES } from "../../const";
import { CellItem, Players } from "../../types";
import { PeachIcon, WatermelonIcon } from "../Icons";
import { styles } from "./Header.styles";

export const Header: FC<Props> = ({
  title,
  currentPlayer,
  winnerPlayer,
  allMoves,
}) => {
  const CurrentIcon =
    currentPlayer === Players.PlayerA ? WatermelonIcon : PeachIcon;

  return (
    <div>
      <h1>{title}</h1>
      {!winnerPlayer && allMoves.length < MAX_MOVES && (
        <p css={styles.currentlyPlaying}>
          <span css={styles.text}>Currently playing:</span>
          <span css={styles.icon}>
            <CurrentIcon width={30} height={30} />
          </span>
        </p>
      )}
      {allMoves.length === MAX_MOVES && !winnerPlayer && (
        <p>
          No one wins{" "}
          <span role="img" aria-label="Sad face">
            😭
          </span>
        </p>
      )}
      {winnerPlayer && (
        <p>
          You win!{" "}
          <span role="img" aria-label="Smiley face">
            😬
          </span>
        </p>
      )}
    </div>
  );
};

type Props = {
  title: string;
  currentPlayer: Players;
  winnerPlayer: Players | undefined;
  allMoves: CellItem[];
};
