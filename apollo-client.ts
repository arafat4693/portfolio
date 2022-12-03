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

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          worksConnection: relayStylePagination(),
          blogs: {
            //first merge func gets called and then read func. fetchMore always sends a network request which then comes back to the cache and gets merged
            //with the help of merge function. Then cache tries to read the query to send the required data back to the client. But if a read
            // function is present then the moment cache will try to read the query, it will instantly call the read function.
            read(existing, { args: { skip, first } }: any) {
              return existing && existing.slice(skip, skip + first)
            },
            keyArgs: false,
            merge(existing, incoming, { args: { skip } }: any) {
              const merged = existing ? existing.slice(0) : []
              for (let i = 0; i < incoming.length; ++i) {
                merged[skip + i] = incoming[i]
              }
              return merged
            },
          },
        },
      },
    },
  }),
})

export const currentWorkTab = makeVar("All")

export default client
