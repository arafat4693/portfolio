import Title from "../Title"
import WorkSkeleton from "./WorkSkeleton"

export default function WorksSkeleton() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="works" />
      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine py-10 px-12">
          <WorkSkeleton margin />
          <WorkSkeleton margin />
          <WorkSkeleton />
        </li>

        <li className="py-10 px-12">
          <WorkSkeleton margin />
          <WorkSkeleton margin />
          <WorkSkeleton />
        </li>
      </ul>
    </div>
  )
}
