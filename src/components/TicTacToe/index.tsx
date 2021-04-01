/** @jsxImportSource @emotion/react */
import { useState, FC } from "react";

import useStyles from "./styles";

const PLAYER_A = 0;
const PLAYER_B = 1;

type Cell = {
  x: number;
  y: number;
};

type PlayedBy = {
  playedByA: boolean;
  playedByB: boolean;
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

  const playedBy = (cell: Cell): PlayedBy => {
    const cellInPlayerA = !!playerMovesA.find(
      (c) => c.x === cell.x && c.y === cell.y
    );

    if (cellInPlayerA) {
      return {
        playedByA: true,
        playedByB: false,
      };
    } else {
      const cellInPlayerB = !!playerMovesB.find(
        (c) => c.x === cell.x && c.y === cell.y
      );
      if (cellInPlayerB) {
        return {
          playedByA: false,
          playedByB: true,
        };
      }
    }

    return {
      playedByA: false,
      playedByB: false,
    };
  };

  return (
    <div css={styles.root}>
      <div css={styles.grid}>
        {[...Array(3)].map((value, y) => (
          <div key={y} css={styles.row}>
            {[...Array(3)].map((value, x) => (
              <div key={x} css={styles.cell}>
                <button
                  css={styles.button(playedBy({ x, y }))}
                  disabled={
                    !![...playerMovesA, ...playerMovesB].find(
                      (cell) => cell.x === x && cell.y === y
                    )
                  }
                  onClick={() => saveMove({ x, y })}
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
