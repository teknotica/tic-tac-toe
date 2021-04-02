/** @jsxImportSource @emotion/react */
import { useState, useEffect, FC } from "react";

import checkWinner from "../../utils/checkWinner";
import useStyles from "./styles";

export const PLAYER_A = "player_a";
export const PLAYER_B = "player_b";

export type Players = "player_a" | "player_b";

export type Cell = {
  x: number;
  y: number;
};

export type PlayersMoves = {
  [PLAYER_A]: Cell[];
  [PLAYER_B]: Cell[];
};

const TicTacToe: FC = () => {
  const styles = useStyles();
  const [currentPlayer, setCurrentPlayer] = useState<Players>(PLAYER_A);
  const [winnerPlayer, setWinnerPlayer] = useState<Players>();
  const [playersMoves, setPlayersMoves] = useState<PlayersMoves>({
    [PLAYER_A]: [],
    [PLAYER_B]: [],
  });

  useEffect(() => {
    const lastPlayerMoves =
      playersMoves[currentPlayer === PLAYER_A ? PLAYER_B : PLAYER_A];

    // Check for winner if they have 3+ moves
    if (lastPlayerMoves.length >= 3) {
      const isWinner = checkWinner(lastPlayerMoves);

      if (isWinner) {
        setWinnerPlayer(currentPlayer);
      }
    }
  }, [playersMoves, currentPlayer]);

  const saveMove = (cell: Cell) => {
    const currentPlayerMoves = playersMoves[currentPlayer];

    // Merge values to main object
    setPlayersMoves({
      ...playersMoves,
      ...{ [currentPlayer]: [...currentPlayerMoves, cell] },
    });

    // Switch player for next move
    const nextPlayer = currentPlayer === PLAYER_A ? PLAYER_B : PLAYER_A;
    setCurrentPlayer(nextPlayer);
  };

  return (
    <div css={styles.root}>
      {winnerPlayer && <h1>You win!</h1>}
      <div css={styles.grid}>
        {[...Array(3)].map((value, y) => (
          <div key={y} css={styles.row}>
            {[...Array(3)].map((value, x) => (
              <div key={x} css={styles.cell}>
                <button
                  css={styles.button}
                  disabled={
                    !![
                      ...playersMoves[PLAYER_A],
                      ...playersMoves[PLAYER_B],
                    ].find((cell) => cell.x === x && cell.y === y) ||
                    !!winnerPlayer
                  }
                  onClick={(event) => {
                    event.currentTarget.classList.add(currentPlayer);
                    saveMove({ x, y });
                  }}
                >
                  {x},{y}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
