import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { makeVar } from "@apollo/client"
import { WorksConnectionData, WorksData } from "./types"
import { relayStylePagination } from "@apollo/client/utilities"

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          worksConnection: relayStylePagination(),
        },
      },
    },
  }),
})

export const currentWorkTab = makeVar("All")

export default client
