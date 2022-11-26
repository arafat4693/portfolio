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

    getPrices: gql`
      query GetPrices {
        prices {
          id
          packageName
          packagePrice
          priceType
          freelanceUrl
          packageServices {
            id
            isIncluded
            packageService
          }
        }
      }
    `,

    getTestimonials: gql`
      query GetTestimonials {
        testimonials {
          id
          userName
          userProfession
          quote
          userImage {
            url
          }
        }
      }
    `,
  },
}
