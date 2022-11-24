export interface ProfileData {
  id: string
  bio: string
  cv: string
  name: string
  skills: string[]
  socialMediaAcc: SocialMediaData[]
  ownerInfo: OwnerData[]
  ownersPhoto: { url: string }
  bgImages: { url: string }[]
}

interface SocialMediaData {
  id: string
  icon: string
  label: string
  profileUrl: string
}

interface OwnerData {
  id: string
  field: string
  value: string
}
