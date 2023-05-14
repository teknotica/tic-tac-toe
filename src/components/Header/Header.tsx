/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from "react";

import { MAX_MOVES } from "../../const";
import { CellItem, Player } from "../../types";
import { PeachIcon, WatermelonIcon } from "../Icons";
import { styles } from "./Header.styles";

export const Header: FunctionComponent<Props> = ({
  title,
  currentPlayer,
  winnerPlayer,
  allMoves,
}) => (
  <div>
    <h1>{title}</h1>
    <div css={styles.info}>
      {!winnerPlayer && allMoves.length < MAX_MOVES && (
        <>
          <span css={styles.text}>Next move: </span>
          <span css={styles.icon}>{getIcon(currentPlayer)}</span>
        </>
      )}
      {allMoves.length === MAX_MOVES && !winnerPlayer && (
        <>
          <span css={styles.text}>No one wins!</span>
          <span css={styles.icon}>
            <span role="img" aria-label="Sad face">
              😭
            </span>
          </span>
        </>
      )}
      {winnerPlayer && (
        <>
          <span css={styles.text}>You win!</span>{" "}
          <span css={styles.icon}>{getIcon(winnerPlayer)}</span>
        </>
      )}
    </div>
  </div>
);

type Props = {
  title: string;
  currentPlayer: Player;
  winnerPlayer: Player | undefined;
  allMoves: CellItem[];
};

const iconsMapper = {
  player_a: WatermelonIcon,
  player_b: PeachIcon,
};

const getIcon = (player: Player) => {
  const Icon = iconsMapper[player];

  return <Icon width={30} height={30} />;
};
