import { gql } from "@apollo/client"

export default {
  Queries: {
    getProfile: gql`
      query GetProfile {
        profiles {
          bio
          cv
          id
          name
          skills
          socialMediaAcc {
            icon
            id
            label
            profileUrl
          }
          ownerInfo {
            field
            id
            value
          }
          ownersPhoto {
            url
          }
          bgImages {
            url
          }
        }
      }
    `,
  },
}
