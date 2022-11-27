import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { FaPlus } from "react-icons/fa"

interface Props {
  title: string
  imageUrl: string
  margin?: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Work({ title, imageUrl, margin, setIsOpen }: Props) {
  return (
    <div
      onClick={() => setIsOpen(true)}
      className={`${
        margin ? "mb-12" : "mb-2"
      } cursor-pointer group work-wrapper`}
    >
      <div className={`relative w-full h-72 work`}>
        <FaPlus className="text-main-orange text-5xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        <Image
          src={imageUrl}
          alt="project"
          objectFit="cover"
          layout="fill"
          className="group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <p className="capitalize text-gray-300 text-2xl text-center mt-6 mb-4 tracking-wide group-hover:text-main-orange transition-all duration-150">
        {title}
      </p>
      <p className="text-gray-500 text-xl text-center tracking-wide capitalize">
        project
      </p>
    </div>
  )
}
