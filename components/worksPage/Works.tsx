import { useQuery } from "@apollo/client"
import { useMemo, useState } from "react"
import Title from "../Title"
import Work from "./Work"
import WorkLb from "./WorkLb"
import WorkSkeleton from "./WorkSkeleton"
import workOperations from "../../graphqlOperations/work"
import { WorksData } from "../../types"
import WorksSkeleton from "./WorksSkeleton"
import { currentWorkTab } from "../../apollo-client"
import { useReactiveVar } from "@apollo/client"

// const menus = ["all", "video", "link", "image", "gallery", "content"]

interface WorksQuery {
  works: WorksData[]
}

export default function Works() {
  const currentTab = useReactiveVar(currentWorkTab)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: worksData, error: worksError } = useQuery<WorksQuery>(
    workOperations.Queries.getWorks
  )
  const filteredWorks = useMemo(() => {
    if (worksData === undefined) return
    const newWorks = worksData.works.filter((w) =>
      w.workTabs.some((t) => t.tab === currentTab)
    )
    return [
      newWorks.slice(0, Math.round(newWorks.length / 2)),
      newWorks.slice(Math.round(newWorks.length / 2)),
    ]
  }, [worksData, currentTab])

  if (worksError) console.log(worksError)

  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="works" currentMenu={currentTab} />

      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine py-10 px-12">
          {filteredWorks ? (
            filteredWorks[0].map((w, idx) => (
              <Work
                key={w.id}
                setIsOpen={setIsOpen}
                title={w.title}
                imageUrl={w.images[0].url}
                margin={idx !== Math.round(filteredWorks[0].length) - 1}
              />
            ))
          ) : (
            <WorksSkeleton />
          )}
        </li>

        <li className="py-10 px-12">
          {filteredWorks ? (
            filteredWorks[1].map((w, idx) => (
              <Work
                key={w.id}
                setIsOpen={setIsOpen}
                title={w.title}
                imageUrl={w.images[0].url}
                margin={idx !== Math.round(filteredWorks[1].length) - 1}
              />
            ))
          ) : (
            <WorksSkeleton />
          )}
        </li>
      </ul>

      <WorkLb isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
