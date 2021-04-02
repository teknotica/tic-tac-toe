/** @jsxImportSource @emotion/react */
import { useState, useEffect, FC } from "react";

import checkWinner from "../../utils/checkWinner";
import useStyles from "./styles";

const MAX_MOVES = 9;
export const PLAYER_A = "player_a";
export const PLAYER_B = "player_b";

const initialMovesState = {
  [PLAYER_A]: [],
  [PLAYER_B]: [],
};

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
  const [winnerLine, setWinnerLine] = useState<Cell[]>();
  const [playersMoves, setPlayersMoves] = useState<PlayersMoves>(
    initialMovesState
  );
  const allMoves = [...playersMoves[PLAYER_A], ...playersMoves[PLAYER_B]];

  useEffect(() => {
    const lastPlayer = currentPlayer === PLAYER_A ? PLAYER_B : PLAYER_A;
    const lastPlayerMoves = playersMoves[lastPlayer];

    // Check for winner if they have 3+ moves
    if (lastPlayerMoves.length >= 3) {
      const winnerLine = checkWinner(lastPlayerMoves);

      if (winnerLine && !!winnerLine.length) {
        setWinnerLine(winnerLine);
        setWinnerPlayer(lastPlayer);
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

  const resetButtonClasses = () => {
    const buttons = document.getElementById("grid")?.querySelectorAll("button");

    if (buttons) {
      buttons.forEach((button) => {
        button.classList.remove("player_a", "player_b");
      });
    }
  };

  const resetGame = () => {
    setPlayersMoves(initialMovesState);
    setWinnerPlayer(undefined);
    setWinnerLine(undefined);
    setCurrentPlayer(PLAYER_A);
    resetButtonClasses();
  };

  return (
    <div css={styles.root}>
      <h1>Tic Tac Toe</h1>
      <div css={styles.header}>
        {winnerPlayer && <h1>{winnerPlayer} wins!</h1>}
        {allMoves.length === MAX_MOVES && !winnerPlayer && (
          <h1>No one wins :(</h1>
        )}
        <button onClick={resetGame}>Reset game</button>
      </div>
      <div id="grid" css={styles.grid}>
        {[...Array(3)].map((value, y) => (
          <div key={y} css={styles.row}>
            {[...Array(3)].map((value, x) => (
              <div key={x} css={styles.cell}>
                <button
                  css={styles.button(
                    winnerPlayer,
                    winnerLine &&
                      !!winnerLine.find((cell) => cell.x === x && cell.y === y)
                  )}
                  arial-label={`cell in position ${x}${y}`}
                  disabled={
                    !!allMoves.find((cell) => cell.x === x && cell.y === y) ||
                    !!winnerPlayer
                  }
                  onClick={(event) => {
                    event.currentTarget.classList.add(currentPlayer);
                    saveMove({ x, y });
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
