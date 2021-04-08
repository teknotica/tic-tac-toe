export enum Players {
  PlayerA = "player_a",
  PlayerB = "player_b",
};

export type Cell = {
  x: number;
  y: number;
};

export type PlayersMoves = {
  [Players.PlayerA]: Cell[];
  [Players.PlayerB]: Cell[];
};