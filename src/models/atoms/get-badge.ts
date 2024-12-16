
export interface Badge {
  alert: {
    isActive: boolean
    limit: number
  }
  available_credits: Array<{
    amount: number
    is_suggested: boolean
  }>
  isCaisseDisabled: boolean
  isValid: boolean
  isVerified: boolean
  name: string
  id: string
  solde: number
}