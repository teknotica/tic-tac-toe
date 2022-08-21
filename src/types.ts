export enum Player {
  PlayerA = "player_a",
  PlayerB = "player_b",
};

export type CellItem = {
  x: number;
  y: number;
};

export type PlayersMoves = {
  [Player.PlayerA]: CellItem[];
  [Player.PlayerB]: CellItem[];
};

export type IconProps = {
  id?: string;
  width?: number;
  height?: number;
};