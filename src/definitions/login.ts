export interface LoginResponse {
  default_universe: {
    code: string
  }

  token: {
    expiration_date: string
    value: string
  }
}
