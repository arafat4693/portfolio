import Image from "next/image"
import { BiChevronRight } from "react-icons/bi"

interface Props {
  year: string
  subHeader: string
  imageUrl?: string
  place: string
  desc: string
  border?: boolean
  present?: boolean
}

export default function ResumeItem({
  year,
  subHeader,
  imageUrl,
  place,
  desc,
  border,
  present,
}: Props) {
  return (
    <div
      className={`pt-11 ${
        border ? "customLine before:bottom-0 relative borderLeft pb-11" : "pb-3"
      }`}
    >
      <h2
        className={`${
          present
            ? "text-main-orange border-main-orange"
            : "text-gray-500 border-gray-500"
        } border border-solid text-xl py-0.5 px-3 tracking-wide inline-block`}
      >
        {year}
      </h2>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl capitalize font-medium text-gray-300 tracking-wide mt-5 mb-4">
          {subHeader}
        </h3>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="linkedin"
            width={100}
            height={27}
            objectFit="contain"
            className="opacity-80"
          />
        )}
      </div>

      <p className="text-gray-500 text-xl capitalize tracking-wider">{place}</p>
      <p className="text-gray-500 text-2xl capitalize tracking-wide mt-5 leading-relaxed">
        {desc}
      </p>

      {/* <div
        className={
          "flex items-center gap-0.5 text-xl text-gray-300 font-semibold uppercase cursor-pointer group"
        }
      >
        <span className="group-hover:mr-1 group-hover:text-main-orange transition-all duration-300">
          recommendation
        </span>
        <BiChevronRight className="text-[2rem] group-hover:text-main-orange transition-all duration-300" />
      </div> */}
    </div>
  )
}
