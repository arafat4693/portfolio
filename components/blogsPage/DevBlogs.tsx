import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { blog } from "../../types"
import Title from "../Title"
import BlogSkeleton from "./BlogSkeleton"
import DevBlog from "./DevBlog"
import DevPagination from "./DevPagination"

const postsPerPage = 10

export default function DevBlogs() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredBlogs, setFilteredBlogs] = useState<blog[] | undefined>(
    undefined
  )
  const {
    data: blogsData,
    isLoading,
    isError,
    reFetch,
  } = useFetch<blog[]>(
    `https://dev.to/api/articles?username=arafat4693&per_page=${postsPerPage}&page=${currentPage}`
  )

  if (isError) {
    console.log(isError)
  }

  useEffect(() => {
    if (blogsData === undefined) return
    setFilteredBlogs(blogsData)
  }, [blogsData, setFilteredBlogs])

  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="blogs" />
      <ul className="relative grid grid-cols-1 sm:grid-cols-2 sm:before:block before:hidden vCustomLine before:left-1/2 before:-translate-x-1/2">
        {filteredBlogs === undefined || isLoading
          ? new Array(postsPerPage)
              .fill(0)
              .map((_, idx) => <BlogSkeleton key={idx} />)
          : filteredBlogs.map((b, idx) => <DevBlog key={idx} blog={b} />)}
      </ul>

      <div className="px-12 my-12">
        <DevPagination
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onLoadMore={reFetch}
          setFilteredBlogs={setFilteredBlogs}
        />
      </div>
    </section>
  )
}
