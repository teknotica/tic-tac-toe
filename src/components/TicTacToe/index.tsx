/** @jsxImportSource @emotion/react */
import { useState, useEffect, FC } from "react";

import GridItem from "../GridItem";
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

  const isPlayedBy = (currentCell: Cell, player: Players) => {
    const cellInMoves = !!playersMoves[player].find(
      (move) => move.x === currentCell.x && move.y === currentCell.y
    );

    // Doing this to prevent React complaining about non-booleans attributes
    return cellInMoves ? 1 : 0;
  };

  return (
    <div css={styles.root}>
      <h1>Tic Tac Toe</h1>
      <div css={styles.header}>
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
                <GridItem
                  arial-label={`Cell in position ${x}${y}`}
                  css={styles.button(
                    winnerPlayer,
                    winnerLine &&
                      !!winnerLine.find((cell) => cell.x === x && cell.y === y)
                  )}
                  disabled={
                    !!allMoves.find((cell) => cell.x === x && cell.y === y) ||
                    !!winnerPlayer
                  }
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.currentTarget.classList.add(currentPlayer);
                    saveMove({ x, y });
                  }}
                  playedbya={isPlayedBy({ x, y }, PLAYER_A)}
                  playedbyb={isPlayedBy({ x, y }, PLAYER_B)}
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
