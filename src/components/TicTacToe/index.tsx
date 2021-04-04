/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from "react";

import { PLAYER_A, PLAYER_B } from "../../const";
import { Cell, Players, PlayersMoves } from "../../types";
import checkWinner from "../../utils/checkWinner";
import GridItem from "../GridItem";
import Header from "../Header";
import useStyles from "./styles";

const initialMovesState = {
  [PLAYER_A]: [],
  [PLAYER_B]: [],
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

  const resetGame = () => {
    setPlayersMoves(initialMovesState);
    setWinnerPlayer(undefined);
    setWinnerLine(undefined);
    setCurrentPlayer(PLAYER_A);
  };

  const isPlayedBy = (currentCell: Cell, player: Players) => {
    const cellInMoves = !!playersMoves[player].find(
      (move) => move.x === currentCell.x && move.y === currentCell.y
    );

    // Prevents React complaining about non-booleans attributes
    return cellInMoves ? 1 : 0;
  };

  const checkIsWinnerCell = (currentCell: Cell) => {
    const isWinnerCell =
      winnerLine &&
      !!winnerLine.find(
        (winnerCell) =>
          winnerCell.x === currentCell.x && winnerCell.y === currentCell.y
      );

    // Prevents React complaining about non-booleans attributes
    return isWinnerCell ? 1 : 0;
  };

  return (
    <div css={styles.root}>
      <Header
        title="Tic Tac Toe"
        currentPlayer={currentPlayer}
        winnerPlayer={winnerPlayer}
        allMoves={allMoves}
      />
      <div id="grid" css={styles.grid}>
        {[...Array(3)].map((value, y) => (
          <div key={y} css={styles.row}>
            {[...Array(3)].map((value, x) => (
              <div key={x}>
                <GridItem
                  arial-label={`Cell in position ${x}${y}`}
                  disabled={
                    !!allMoves.find((cell) => cell.x === x && cell.y === y) ||
                    !!winnerPlayer
                  }
                  onClick={() => saveMove({ x, y })}
                  iswinnercell={checkIsWinnerCell({ x, y })}
                  playedbya={isPlayedBy({ x, y }, PLAYER_A)}
                  playedbyb={isPlayedBy({ x, y }, PLAYER_B)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button css={styles.resetBtn} onClick={resetGame}>
        [Reset game]
      </button>
    </div>
  );
};

export default TicTacToe;
