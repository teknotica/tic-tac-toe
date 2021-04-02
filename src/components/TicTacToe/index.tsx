/** @jsxImportSource @emotion/react */
import { useState, FC } from "react";

import useStyles from "./styles";

export const PLAYER_A = "player_a";
export const PLAYER_B = "player_b";

type Cell = {
  x: number;
  y: number;
};

const TicTacToe: FC = () => {
  const styles = useStyles();
  const [playerMovesA, setPlayerMovesA] = useState<Cell[]>([]);
  const [playerMovesB, setPlayerMovesB] = useState<Cell[]>([]);

  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_A);

  const saveMove = (cell: Cell) => {
    if (currentPlayer === PLAYER_A) {
      setPlayerMovesA([...playerMovesA, cell]);
      setCurrentPlayer(PLAYER_B);
      return;
    }

    setPlayerMovesB([...playerMovesB, cell]);
    setCurrentPlayer(PLAYER_A);
  };

  return (
    <div css={styles.root}>
      <div css={styles.grid}>
        {[...Array(3)].map((value, y) => (
          <div key={y} css={styles.row}>
            {[...Array(3)].map((value, x) => (
              <div key={x} css={styles.cell}>
                <button
                  css={styles.button}
                  disabled={
                    !![...playerMovesA, ...playerMovesB].find(
                      (cell) => cell.x === x && cell.y === y
                    )
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
      <h2>Player A</h2>
      <div>
        <pre>{JSON.stringify(playerMovesA)}</pre>
      </div>
      <h2>Player B</h2>
      <div>
        <pre>{JSON.stringify(playerMovesB)}</pre>
      </div>
    </div>
  );
};

export default TicTacToe;
