export type Token = Readonly<{
  value: string

  /**
   * Most of the time, it expires after 3 months.
   */
  expirationDate: Date
}>;
