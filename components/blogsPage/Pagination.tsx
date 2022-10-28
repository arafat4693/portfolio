import { BiChevronLeft } from "react-icons/bi"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export default function Pagination() {
  return (
    <div className="p-5 rounded-lg bg-[#0e1422d9] flex justify-center items-center gap-7">
      <button className="hover:text-gray-500 hidden group transition-all duration-300 items-center gap-0.5 text-gray-400 text-[1.4rem]">
        <FiChevronLeft className="text-3xl" />
        Prev
      </button>
      <div className="flex items-center gap-7">
        <span className="text-[1.4rem] text-main-orange transition-all duration-300 cursor-pointer">
          1
        </span>
        <span className="text-[1.4rem] hover:text-main-orange transition-all duration-300 text-gray-400 cursor-pointer">
          2
        </span>
      </div>
      <button className="hover:text-gray-500 group transition-all duration-300 flex items-center gap-0.5 text-gray-400 text-[1.4rem]">
        Next
        <FiChevronRight className="text-3xl" />
      </button>
    </div>
  )
}
