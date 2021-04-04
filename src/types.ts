import { PLAYER_A, PLAYER_B } from "./const";

export type Players = "player_a" | "player_b";

export type Cell = {
  x: number;
  y: number;
};

export type PlayersMoves = {
  [PLAYER_A]: Cell[];
  [PLAYER_B]: Cell[];
};