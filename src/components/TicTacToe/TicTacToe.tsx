/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from "react";
import { useEffect, useState } from "react";

import { CellItem, Player, PlayersMoves } from "../../types";
import { checkWinnerLine } from "../../utils/checkWinnerLine";
import { Cell } from "../Cell";
import { Header } from "../Header";
import { styles } from "./TicTacToe.styles";

const initialMovesState = {
  [Player.PlayerA]: [],
  [Player.PlayerB]: [],
};

export const TicTacToe: FunctionComponent = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.PlayerA);
  const [winnerPlayer, setWinnerPlayer] = useState<Player>();
  const [winnerLine, setWinnerLine] = useState<CellItem[]>();
  const [playersMoves, setPlayersMoves] =
    useState<PlayersMoves>(initialMovesState);
  const allMoves = [
    ...playersMoves[Player.PlayerA],
    ...playersMoves[Player.PlayerB],
  ];
  const player =
    currentPlayer === Player.PlayerA ? Player.PlayerB : Player.PlayerA;

  useEffect(() => {
    const lastPlayerMoves = playersMoves[player];

    // Check for winner if they have 3+ moves
    if (lastPlayerMoves.length >= 3) {
      const winnerLine = checkWinnerLine(lastPlayerMoves);

      if (winnerLine && !!winnerLine.length) {
        setWinnerLine(winnerLine);
        setWinnerPlayer(player);
      }
    }
  }, [player, playersMoves, currentPlayer]);

  const saveMove = (cell: CellItem) => {
    const currentPlayerMoves = playersMoves[currentPlayer];

    // Merge values to main object
    setPlayersMoves({
      ...playersMoves,
      ...{ [currentPlayer]: [...currentPlayerMoves, cell] },
    });

    // Switch player for next move
    setCurrentPlayer(player);
  };

  const resetGame = () => {
    setPlayersMoves(initialMovesState);
    setWinnerPlayer(undefined);
    setWinnerLine(undefined);
    setCurrentPlayer(Player.PlayerA);
  };

  const isPlayedBy = (currentCell: CellItem, player: Player) => {
    const cellInMoves = playersMoves[player].find(
      (move) => move.x === currentCell.x && move.y === currentCell.y
    );

    return Boolean(cellInMoves);
  };

  const checkIsWinnerCell = (currentCell: CellItem) => {
    const isWinnerCell =
      winnerLine &&
      !!winnerLine.find(
        (winnerCell) =>
          winnerCell.x === currentCell.x && winnerCell.y === currentCell.y
      );

    return Boolean(isWinnerCell);
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
        {[...Array(3)].map((_, y) => (
          <div key={y} css={styles.row}>
            {[...Array(3)].map((_, x) => (
              <div key={x}>
                <Cell
                  id={`${x}-${y}`}
                  arial-label={`Cell in row ${x} column ${y}`}
                  disabled={
                    !!allMoves.find((cell) => cell.x === x && cell.y === y) ||
                    !!winnerPlayer
                  }
                  onClick={() => saveMove({ x, y })}
                  isWinnerCell={checkIsWinnerCell({ x, y })}
                  playedByA={isPlayedBy({ x, y }, Player.PlayerA)}
                  playedByB={isPlayedBy({ x, y }, Player.PlayerB)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        css={styles.resetBtn}
        disabled={allMoves.length === 0}
        onClick={resetGame}
      >
        Reset game
      </button>
    </div>
  );
};
