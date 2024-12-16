export type GetClientFeatures = Readonly<{
  storeReview: boolean
  consigne: boolean
  contactFormActivated: boolean
  menu_settings: {
    print: string
    price: string
  }
  rubrique_avis: {
      rubriqueAvisActivated: boolean
      rubriqueAvisRedirectLink: string
  }
  badge: {
    credit: {} // TODO
    isMatricule: boolean
    badge_id: number
    alert: {} // TODO
    rechargement_on: boolean
    matricule: string
    nom: string
  }
}>