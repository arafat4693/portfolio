import { useQuery } from "@apollo/client"
import { useMemo, useState } from "react"
import Title from "../Title"
import Work from "./Work"
import workOperations from "../../graphqlOperations/work"
import { WorksConnectionData } from "../../types"
import WorksSkeleton from "./WorksSkeleton"
import { currentWorkTab } from "../../apollo-client"
import { useReactiveVar } from "@apollo/client"
import InfiniteScroll from "react-infinite-scroll-component"
import Loader from "../Loader"
import { motion, AnimatePresence } from "framer-motion"

interface WorksQuery {
  worksConnection: WorksConnectionData
}

interface WorksVariables {
  after?: string
  first: number
}

export default function Works() {
  const currentTab = useReactiveVar(currentWorkTab)
  const [isOpen, setIsOpen] = useState<string | null>(null)
  const {
    data: worksData,
    error: worksError,
    fetchMore,
  } = useQuery<WorksQuery, WorksVariables>(workOperations.Queries.getWorks, {
    variables: { first: 6 },
  })

  const filteredWorks = useMemo(() => {
    if (worksData === undefined) return
    return worksData.worksConnection.edges.filter((w) =>
      w.node.workTabs.some((t) => t.tab === currentTab)
    )
  }, [worksData?.worksConnection.edges, currentTab])

  if (worksError) {
    console.log(worksError.toString())
    return <WorksSkeleton />
  }

  if (worksData === undefined) return <WorksSkeleton />

  return (
    <div
      id="scrollableDiv"
      className="lg:h-full h-[95rem] overflow-y-scroll myScroll"
    >
      <Title name="works" currentMenu={currentTab} />

      <InfiniteScroll
        dataLength={worksData.worksConnection.edges.length}
        next={() => {
          return fetchMore({
            variables: { after: worksData.worksConnection.pageInfo.endCursor },
          })
        }}
        hasMore={worksData.worksConnection.pageInfo.hasNextPage}
        loader={
          <div className="flex justify-center mb-8">
            <Loader />
          </div>
        }
        scrollableTarget="scrollableDiv"
      >
        <motion.ul
          layout="position"
          className="grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:hidden sm:before:block before:left-1/2 before:-translate-x-1/2 pt-12"
        >
          <AnimatePresence>
            {filteredWorks &&
              filteredWorks.map((w) => (
                <Work
                  key={w.node.id}
                  title={w.node.title}
                  imageUrl={w.node.images[0].url}
                  projectId={w.node.id}
                />
              ))}
          </AnimatePresence>
        </motion.ul>
      </InfiniteScroll>
    </div>
  )
}
