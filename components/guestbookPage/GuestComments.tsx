import { useQuery } from "@apollo/client"
import guestBookOperations from "../../graphqlOperations/guestBook"
import { guestBooksConnection } from "../../types"

interface CommentsVariables {
  after?: string
  first: number
}

interface CommentsQuery {
  guestBooksConnection: guestBooksConnection
}

export default function GuestComments() {
  const { data, error, fetchMore, loading } = useQuery<
    CommentsQuery,
    CommentsVariables
  >(guestBookOperations.Queries.getComments, {
    variables: { first: 10 },
  })

  if (error)
    return <pre className="text-xl text-gray-500">{JSON.stringify(error)}</pre>
  if (loading) return <h1>loading...</h1>

  console.log(data)

  return (
    <ul className="relative mt-12 customLine before:top-0 borderLeft">
      <li className="pt-10">
        <div className="flex items-center gap-x-6">
          <h3 className="text-2xl font-semibold capitalize text-main-orange">
            John Doe
          </h3>
          <time className="text-xl text-gray-600" dateTime="1785-12-30">
            8:16 pm - April 28, 2020
          </time>
        </div>
        <p className="mt-4 text-2xl tracking-wider text-gray-400">
          An has alterum nominavi. Nam at elitr veritus voluptaria. Cu eum
          regione tacimates vituperatoribus, ut mutat delenit est. Lorem ipsum,
          dolor sit amet consectetur adipisicing.
        </p>
      </li>

      <li className="pt-10">
        <div className="flex items-center gap-x-6">
          <h3 className="text-2xl font-semibold capitalize text-main-orange">
            John Doe
          </h3>
          <time className="text-xl text-gray-600" dateTime="1785-12-30">
            8:16 pm - April 28, 2020
          </time>
        </div>
        <p className="mt-4 text-2xl tracking-wider text-gray-400">
          An has alterum nominavi. Nam at elitr veritus voluptaria. Cu eum
          regione tacimates vituperatoribus, ut mutat delenit est. Lorem ipsum,
          dolor sit amet consectetur adipisicing.
        </p>
      </li>

      <li className="pt-10">
        <div className="flex items-center gap-x-6">
          <h3 className="text-2xl font-semibold capitalize text-main-orange">
            John Doe
          </h3>
          <time className="text-xl text-gray-600" dateTime="1785-12-30">
            8:16 pm - April 28, 2020
          </time>
        </div>
        <p className="mt-4 text-2xl tracking-wider text-gray-400">
          An has alterum nominavi. Nam at elitr veritus voluptaria. Cu eum
          regione tacimates vituperatoribus, ut mutat delenit est. Lorem ipsum,
          dolor sit amet consectetur adipisicing.
        </p>
      </li>
    </ul>
  )
}
