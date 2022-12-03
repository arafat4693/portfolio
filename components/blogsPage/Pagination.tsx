import { ApolloQueryResult, useQuery } from "@apollo/client"
import { Dispatch, SetStateAction, MouseEvent } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Skeleton from "react-loading-skeleton"
import blogOperations from "../../graphqlOperations/blog"
import SkeletonWrapper from "../SkeletonWrapper"
import { client } from "../../apollo-client"
import { BlogsQuery } from "../../types"

interface fetchMoreArgs {
  variables: {
    skip: number
    first: number
  }
}

interface Props {
  currentPage: number
  postsPerPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  setSkip: Dispatch<SetStateAction<number>>
  setFilteredBlogs: Dispatch<SetStateAction<BlogsQuery | undefined>>
  onLoadMore: any
}

interface RecordsQuery {
  blogsConnection: { aggregate: { count: number } }
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  postsPerPage,
  onLoadMore,
  setSkip,
  setFilteredBlogs,
}: Props) {
  const { data: paginationData, error } = useQuery<RecordsQuery>(
    blogOperations.Queries.getTotalRecords
  )

  if (error) {
    console.log(error)
  }

  if (paginationData === undefined || error) {
    return (
      <SkeletonWrapper>
        <Skeleton height={40} />
      </SkeletonWrapper>
    )
  }

  const totalPages = Math.ceil(
    paginationData.blogsConnection.aggregate.count / postsPerPage
  )

  function getCachedBlogs(skipBlogs: number) {
    const { blogs } = client.readQuery({
      query: blogOperations.Queries.getBlogs,
      variables: {
        skip: skipBlogs,
        first: postsPerPage,
      },
    })
    return blogs
  }

  function changePage(nextPage: number) {
    setCurrentPage(nextPage)
    const skipBlogs = (nextPage - 1) * postsPerPage
    const cachedBlogs = getCachedBlogs(skipBlogs)
    if (cachedBlogs.length) {
      setFilteredBlogs({ blogs: cachedBlogs })
    } else {
      onLoadMore({
        variables: { skip: skipBlogs, first: postsPerPage },
      }).then(() => setSkip((nextPage - 1) * postsPerPage))
    }
  }

  return (
    <div className="p-5 rounded-lg bg-[#0e1422d9] flex justify-center items-center gap-7">
      <button
        onClick={() => changePage(currentPage - 1)}
        className={`hover:text-main-orange ${
          currentPage > 1
            ? "text-gray-400"
            : "text-gray-500 pointer-events-none"
        } group transition-all duration-300 items-center gap-0.5 text-[1.4rem] flex`}
      >
        <FiChevronLeft className="text-3xl" />
        Prev
      </button>
      <div className="flex items-center gap-7 flex-wrap">
        {new Array(totalPages).fill(0).map((_, idx) => (
          <span
            key={idx}
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              changePage(+((e.target as HTMLElement).textContent as string))
            }
            className={`text-[1.4rem] ${
              currentPage === idx + 1
                ? "text-main-orange"
                : "text-gray-500 hover:text-main-orange transition-all"
            } transition-all duration-300 cursor-pointer`}
          >
            {idx + 1}
          </span>
        ))}
      </div>
      <button
        onClick={() => changePage(currentPage + 1)}
        className={`hover:text-main-orange ${
          currentPage < totalPages
            ? "text-gray-400"
            : "text-gray-500 pointer-events-none"
        } group transition-all duration-300 items-center gap-0.5 text-gray-400 text-[1.4rem] flex`}
      >
        Next
        <FiChevronRight className="text-3xl" />
      </button>
    </div>
  )
}
