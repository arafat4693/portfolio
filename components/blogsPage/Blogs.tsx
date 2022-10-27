import Title from "../Title"
import Blog from "./Blog"
import Pagination from "./Pagination"

export default function Blogs() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="blogs" />

      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine pt-10 px-12">
          <Blog imageUrl="/images/g-7.jpg" releasedDate="April 28, 2022" />
          <Blog imageUrl="/images/g-9.jpg" releasedDate="April 28, 2022" />
        </li>
        <li className="pt-10 px-12">
          <Blog imageUrl="/images/p-2.jpg" releasedDate="April 28, 2022" />
          <Blog imageUrl="/images/g-7.jpg" releasedDate="April 28, 2022" />
        </li>
      </ul>

      <div className="px-12 mb-14">
        <Pagination />
      </div>
    </div>
  )
}
