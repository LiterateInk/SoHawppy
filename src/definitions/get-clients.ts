export type get_clients = Array<{
  access_authorized: boolean
  address: {
    formatted: string
    latitude: number
    longitude: number
  }
  features: {
    badge:{
      credit: {} // TODO
      is_matricule: boolean
      badge: number
      alert: {} // TODO
      rechargement_on: boolean
      matricule: string
      nom: string
    }
    contact_form:{
      contact_form_activated: 1 | 0
    }
    menus:{
      print:{
          setting: "PRINT_BY_WEEK_AND_MONTH" // TODO : other fields
      }
      price:{
          setting: "PRICE_UNDISPLAYED" // TODO : other fields
      }
      allergens: {} // TODO
      source: string
      substitute_recipes: [] // TODO
    }
    seesaw:{
        blocking_popin_date: string
        non_blocking_popin_date: string
    }
    store_review: boolean
    consigne: boolean
    rubrique_avis: {
        rubrique_avis_activated: 1 | 0
        rubrique_avis_redirect_link: string
    }
  }
  id: number
  logo_url: string
  name: string
  usage: {
    code: string
    label: string
  }
}>;
