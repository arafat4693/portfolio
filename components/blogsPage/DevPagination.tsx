import { Dispatch, MouseEvent, SetStateAction } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Skeleton from "react-loading-skeleton"
import { useFetch } from "../../hooks/useFetch"
import { blog } from "../../types"
import SkeletonWrapper from "../SkeletonWrapper"

interface Props {
  currentPage: number
  postsPerPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  onLoadMore: any
  setFilteredBlogs: Dispatch<SetStateAction<blog[] | undefined>>
}

export default function DevPagination({
  currentPage,
  postsPerPage,
  setCurrentPage,
  onLoadMore,
  setFilteredBlogs,
}: Props) {
  const { data: totalBlogs, isError } = useFetch<number>(
    `/api/dev/totalArticles`
  )

  if (isError) {
    console.log(isError)
  }

  if (totalBlogs === undefined || isError) {
    return (
      <SkeletonWrapper>
        <Skeleton height={40} />
      </SkeletonWrapper>
    )
  }

  const totalPages = Math.ceil(totalBlogs / postsPerPage)

  function changePage(nextPage: number) {
    setCurrentPage(nextPage)
    onLoadMore(
      `https://dev.to/api/articles?username=arafat4693&per_page=${postsPerPage}&page=${nextPage}`
    )
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
