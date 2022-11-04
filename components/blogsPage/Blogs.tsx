import Skeleton from "react-loading-skeleton"
import SkeletonWrapper from "../SkeletonWrapper"
import Title from "../Title"
import Blog from "./Blog"
import BlogSkeleton from "./BlogSkeleton"
import Pagination from "./Pagination"

export default function Blogs() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="blogs" />

      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine pt-10 px-12">
          <BlogSkeleton />
          <BlogSkeleton />
          {/* <Blog imageUrl="/images/g-7.jpg" releasedDate="April 28, 2022" />
          <Blog imageUrl="/images/g-9.jpg" releasedDate="April 28, 2022" /> */}
        </li>
        <li className="pt-10 px-12">
          <BlogSkeleton />
          <BlogSkeleton />
          {/* <Blog imageUrl="/images/p-2.jpg" releasedDate="April 28, 2022" />
          <Blog imageUrl="/images/g-7.jpg" releasedDate="April 28, 2022" /> */}
        </li>
      </ul>

      <div className="px-12 mb-14">
        <SkeletonWrapper>
          <Skeleton height={40} />
        </SkeletonWrapper>
        {/* <Pagination /> */}
      </div>
    </div>
  )
}
