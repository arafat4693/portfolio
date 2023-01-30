import { useQuery } from "@apollo/client"
import Title from "../Title"
import Blog from "./Blog"
import BlogSkeleton from "./BlogSkeleton"
import Pagination from "./Pagination"
import blogOperations from "../../graphqlOperations/blog"
import { BlogsQuery } from "../../types"
import { useEffect, useState } from "react"
import { NetworkStatus } from "@apollo/client"

interface BlogsVariables {
  skip: number
  first: number
}

const postsPerPage = 6

export default function Blogs() {
  const [skip, setSkip] = useState<number>(0)
  const [filteredBlogs, setFilteredBlogs] = useState<BlogsQuery | undefined>(
    undefined
  )
  const {
    data: blogsData,
    error,
    fetchMore,
    networkStatus,
  } = useQuery<BlogsQuery, BlogsVariables>(blogOperations.Queries.getBlogs, {
    variables: { skip: skip, first: postsPerPage },
    notifyOnNetworkStatusChange: true,
  })
  const [currentPage, setCurrentPage] = useState<number>(1)

  if (error) {
    console.log(error)
  }

  useEffect(() => {
    if (blogsData === undefined) return
    setFilteredBlogs(blogsData)
  }, [blogsData])

  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="blogs" />

      <ul className="relative grid grid-cols-1 sm:grid-cols-2 sm:before:block before:hidden vCustomLine before:left-1/2 before:-translate-x-1/2">
        {filteredBlogs === undefined ||
        networkStatus === NetworkStatus.fetchMore
          ? new Array(postsPerPage)
              .fill(0)
              .map((_, idx) => <BlogSkeleton key={idx} />)
          : filteredBlogs.blogs.map((b, idx) => <Blog key={idx} blog={b} />)}
      </ul>

      <div className="px-12 my-12">
        <Pagination
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSkip={setSkip}
          setFilteredBlogs={setFilteredBlogs}
          onLoadMore={fetchMore}
        />
      </div>
    </section>
  )
}
