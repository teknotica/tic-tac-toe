import { Cell } from '../../components/TicTacToe/index';

const winnerLines = [
  [{"x":0,"y":0},{"x":1,"y":1},{"x":2,"y":2}],
  [{"x":2,"y":0},{"x":1,"y":1},{"x":0,"y":2}],
  [{"x":0,"y":0},{"x":0,"y":1},{"x":0,"y":2}],
  [{"x":1,"y":0},{"x":1,"y":1},{"x":1,"y":2}],
  [{"x":2,"y":0},{"x":2,"y":1},{"x":2,"y":2}],
  [{"x":0,"y":0},{"x":1,"y":0},{"x":2,"y":0}],
  [{"x":0,"y":1},{"x":1,"y":1},{"x":2,"y":1}],
  [{"x":0,"y":2},{"x":1,"y":2},{"x":2,"y":2}]
];

export default (moves: Cell[]) => {
  const winnerLine = winnerLines.filter(lineArray => {
    let found = false;

    for (let index = 0; index < lineArray.length; index++) {
      const cell = lineArray[index];
      const cellInMoves = moves.find(move => move.x === cell.x && move.y === cell.y);
      
      if (cellInMoves) {
        found = true;
      }
    }
    return found;
  })

  return !!winnerLine.length;
}