export type badge = {
    alert: {
      is_active: boolean,
      limit: number
    }
    available_credits: Array<{
        amount: number
        is_suggested: boolean
    }>
    is_caisse_disabled: boolean,
    is_valid: boolean,
    is_verified: boolean,
    name: string,
    number: string,
    solde: number
};
