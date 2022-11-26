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

export interface PriceData {
  id: string
  packageName: string
  packagePrice: number
  priceType: string
  freelanceUrl: string
  packageServices: PackageServiceData[]
}

interface PackageServiceData {
  id: string
  isIncluded: boolean
  packageService: string
}

interface ClientData {
  id: number
  linkLocation: string
  imgLocation: string
}

interface TestimonialData {
  id: string
  userName: string
  userProfession: string
  quote: string
  userImage: { url: string }
}
