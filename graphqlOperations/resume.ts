import { gql } from "@apollo/client"

export default {
  Queries: {
    getExperience: gql`
      query GetExperience {
        resumes {
          badge
          desc
          experience
          id
          logo {
            url
          }
          subTitle
          title
        }
      }
    `,

    getSkills: gql`
      query GetSkills {
        skills {
          id
          knowledge
          backEnd {
            field
            id
            value
          }
          frontEnd {
            field
            id
            value
          }
          languages {
            field
            id
            value
          }
        }
      }
    `,
  },
}
