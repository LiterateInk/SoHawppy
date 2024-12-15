import type { Token, Universe } from "../atoms";

export interface LoginResponse {
  universe: Universe
  token: Token
}
