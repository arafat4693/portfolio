import { gql } from "@apollo/client"

export default {
  Queries: {
    getWorks: gql`
      query GetWorks {
        works {
          id
          title
          images(first: 1) {
            url
          }
          workTabs {
            tab
          }
        }
      }
    `,

    getTabs: gql`
      query GetTabs {
        workTabs {
          tab
        }
      }
    `,
  },
}
