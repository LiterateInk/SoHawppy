import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";

import type { LoginResponse, GetClient } from "~/models";
import type * as definitions from "~/definitions";

export const getClients = async (
  session: LoginResponse,
  fetcher: Fetcher = defaultFetcher
): Promise<Array<GetClient>> => {
  const request = new Request(`api-app/users/clients?univers_code=${session.universe.code}`, "GET")
    .addAuthorization(session.token.value);

  const response = await fetcher(request);
  const json: definitions.get_clients = JSON.parse(response.content);

  return json.map((client) => ({
    isAuthorized: client.access_authorized,
    id: client.id,
    logoUrl: client.logo_url,
    name: client.name,
    usage: {
      code: client.usage.code,
      label: client.usage.label
    },
    features: {
      storeReview: client.features.store_review,
      consigne: client.features.consigne,
      contactFormActivated: Boolean(client.features.contact_form.contact_form_activated),
      menu_settings: {
        print: client.features.menus.print.setting,
        price: client.features.menus.price.setting
      },
      rubrique_avis: {
          rubriqueAvisActivated: Boolean(client.features.rubrique_avis.rubrique_avis_activated),
          rubriqueAvisRedirectLink: client.features.rubrique_avis.rubrique_avis_redirect_link
      },
      badge: {
        credit: client.features.badge.credit,
        isMatricule: client.features.badge.is_matricule,
        badge_id: client.features.badge.badge,
        alert: client.features.badge.alert,
        rechargement_on: client.features.badge.rechargement_on,
        matricule: client.features.badge.matricule,
        nom: client.features.badge.nom
      }
    }

  } satisfies GetClient));
};
