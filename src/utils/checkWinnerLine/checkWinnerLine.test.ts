import { checkWinnerLine } from './checkWinnerLine'

const mockPlayerMoves = [
  {x: 0, y: 0},
  {x: 0, y: 1},
  {x: 1, y: 1},
]

const winnerLine = [
  {x: 0, y: 1},
  {x: 1, y: 1},
  {x: 2, y: 1}
]

describe('checkWinnerLine()', () => {
  it('returns winner line if found', () => {
    const result = checkWinnerLine([
      ...mockPlayerMoves,   
      {x: 1, y: 2},
      {x: 2, y: 1}
    ])
    expect(JSON.stringify(result)).toBe(JSON.stringify(winnerLine))
  })

  it('returns undefined if winner line is not found', () => {
    const result = checkWinnerLine(mockPlayerMoves)
    expect(result).toBeUndefined()
  })
})