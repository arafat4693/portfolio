import { gql } from "@apollo/client"

export default {
  Queries: {
    getProfile: gql`
      query GetProfile {
        profiles {
          cv
          id
          name
          ownersPhoto {
            url
          }
          bgImages {
            url
          }
        }
      }
    `,

    getBio: gql`
      query GetBio {
        profiles {
          bio
        }
      }
    `,

    getServices: gql`
      query GetServices {
        services {
          id
          title
          serviceDesc
        }
      }
    `,
  },
}
