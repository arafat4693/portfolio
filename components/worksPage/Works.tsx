import { useState } from "react"
import Title from "../Title"
import Work from "./Work"
import WorkLb from "./WorkLb"
import WorkSkeleton from "./WorkSkeleton"

const menus = ["all", "video", "link", "image", "gallery", "content"]

export default function Works() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="works" menus={menus} />

      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine py-10 px-12">
          {/* <Work
            setIsOpen={setIsOpen}
            height="h-[28rem]"
            imageUrl="/images/g-7.jpg"
            margin
          /> */}
          <WorkSkeleton margin />
          <Work
            setIsOpen={setIsOpen}
            height="h-72"
            imageUrl="/images/g-9.jpg"
            margin
          />
          {/* <WorkSkeleton margin /> */}
          {/* <Work
            setIsOpen={setIsOpen}
            height="h-80"
            imageUrl="/images/p-2.jpg"
            margin
          /> */}
          <WorkSkeleton margin />
          {/* <Work
            setIsOpen={setIsOpen}
            height="h-[28rem]"
            imageUrl="/images/g-7.jpg"
          /> */}
          <WorkSkeleton />
        </li>
        <li className="py-10 px-12">
          {/* <Work
            setIsOpen={setIsOpen}
            height="h-80"
            imageUrl="/images/p-2.jpg"
            margin
          /> */}
          <WorkSkeleton margin />
          {/* <Work
            setIsOpen={setIsOpen}
            height="h-[34rem]"
            imageUrl="/images/g-7.jpg"
            margin
          /> */}
          <WorkSkeleton margin />
          {/* <Work
            setIsOpen={setIsOpen}
            height="h-80"
            imageUrl="/images/g-9.jpg"
            margin
          /> */}
          <WorkSkeleton margin />
          {/* <Work
            setIsOpen={setIsOpen}
            height="h-72"
            imageUrl="/images/p-2.jpg"
          /> */}
          <WorkSkeleton />
        </li>
      </ul>

      <WorkLb isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
