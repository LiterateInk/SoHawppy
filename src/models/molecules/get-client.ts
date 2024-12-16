import { GetClientFeatures } from "../atoms"

export interface GetClient {
  isAuthorized: boolean
  id: number
  logoUrl: string
  name: string
  usage: {
    code: string
    label: string
  }
  features: GetClientFeatures
}