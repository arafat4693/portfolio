import { IconType } from "react-icons"

interface ProfileData {
  id: string
  cv: string
  name: string
  ownersPhoto: { url: string }
  bgImages: { url: string }[]
}

interface ServiceData {
  id: number
  title: string
  Icon: IconType
  description: string
}

interface PriceData {
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

interface ExperienceData {
  id: string
  badge: string
  desc: string
  experience: boolean
  subTitle: string
  title: string
  logo: { url: string }
}

interface SkillData {
  id: string
  knowledge: string[]
  backEnd: FieldValueData[]
  frontEnd: FieldValueData[]
  languages: FieldValueData[]
}

interface FieldValueData {
  id: string
  field: string
  value: string
}

interface WorksData {
  id: string
  title: string
  images: { url: string }[]
  workTabs: { tab: String }[]
}
