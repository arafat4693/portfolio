import { IconType } from "react-icons"

export interface ProfileData {
  id: string
  cv: string
  name: string
  ownersPhoto: { url: string }
  bgImages: { url: string }[]
}

export interface ServiceData {
  id: number
  title: string
  Icon: IconType
  description: string
}
