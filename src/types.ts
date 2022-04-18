export enum Players {
  PlayerA = "player_a",
  PlayerB = "player_b",
};

export type CellItem = {
  x: number;
  y: number;
};

export type PlayersMoves = {
  [Players.PlayerA]: CellItem[];
  [Players.PlayerB]: CellItem[];
};

export type IconProps = {
  id?: string;
  width?: number;
  height?: number;
};