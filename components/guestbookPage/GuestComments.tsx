import { useQuery } from "@apollo/client"
import InfiniteScroll from "react-infinite-scroll-component"
import guestBookOperations from "../../graphqlOperations/guestBook"
import { guestBooksConnection } from "../../types"
import Loader from "../Loader"
import { motion } from "framer-motion"

interface CommentsVariables {
  after?: string
  first: number
}

interface CommentsQuery {
  guestBooksConnection: guestBooksConnection
}

function formateDate(d: Date) {
  let date = new Date(d)
  let formattedDate = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return formattedDate
}

export default function GuestComments() {
  const { data, error, fetchMore } = useQuery<CommentsQuery, CommentsVariables>(
    guestBookOperations.Queries.getComments,
    {
      variables: { first: 10 },
    }
  )

  if (error)
    return <pre className="text-xl text-gray-500">{JSON.stringify(error)}</pre>

  if (data === undefined)
    return (
      <div className="flex justify-center mt-8">
        <Loader />
      </div>
    )

  return (
    <InfiniteScroll
      dataLength={data.guestBooksConnection.edges.length}
      next={() => {
        return fetchMore({
          variables: { after: data.guestBooksConnection.pageInfo.endCursor },
        })
      }}
      hasMore={data.guestBooksConnection.pageInfo.hasNextPage}
      loader={
        <div className="flex justify-center mt-8 mb-5">
          <Loader />
        </div>
      }
      scrollableTarget="guestComments"
    >
      <motion.ul className="relative mt-12 customLine before:top-0 borderLeft">
        {data.guestBooksConnection.edges.map((d) => (
          <motion.li
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={d.node.id}
            className="pt-10"
          >
            <div className="flex items-center gap-x-6">
              <h3 className="text-2xl font-semibold capitalize text-main-orange">
                {d.node.name}
              </h3>
              <time
                className="hidden text-xl text-gray-600 sm:block"
                dateTime="1785-12-30"
              >
                {formateDate(d.node.createdAt)}
              </time>
            </div>
            <p className="mt-4 text-2xl tracking-wider text-gray-400">
              {d.node.comment}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </InfiniteScroll>
  )
}
