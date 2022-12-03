import { gql } from "@apollo/client"

export default {
  Queries: {
    getBlogs: gql`
      query GetBlogs($skip: Int!, $first: Int!) {
        blogs(skip: $skip, first: $first, orderBy: createdAt_DESC) {
          id
          blogUrl
          date
          description
          title
          thumbnail {
            url
          }
        }
      }
    `,

    getTotalRecords: gql`
      query GetTotalRecords {
        blogsConnection {
          aggregate {
            count
          }
        }
      }
    `,
  },
}
