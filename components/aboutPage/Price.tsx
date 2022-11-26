import { FaChevronRight } from "react-icons/fa"
import { PriceData } from "../../types"
import MyIcon from "../MyIcon"

interface Props {
  Icon: any
  price: PriceData
}

export default function Price({ Icon, price }: Props) {
  return (
    <div className="py-10 px-12 flex flex-col items-center">
      <MyIcon Icon={Icon} />
      <h3 className="text-[1.6rem] text-gray-300 font-semibold capitalize mt-4 tracking-wider">
        {price.packageName}
      </h3>
      <div className="amount inline-flex items-center gap-2.5 my-5">
        <sup className="text-[1.6rem] text-gray-300">$</sup>
        <span className="text-[4.2rem] text-gray-300 font-semibold">
          {price.packagePrice}
        </span>
        <sub className="text-[1.6rem] text-gray-300 mt-4">
          {price.priceType}
        </sub>
      </div>

      {price.packageServices.map((ps) => (
        <p
          key={ps.id}
          className={`text-2xl text-gray-400 mb-5 ${
            ps.isIncluded ? "" : "line-through decoration-2"
          }`}
        >
          {ps.packageService}
        </p>
      ))}

      <div className="w-full h-[0.1rem] lineLeft mt-4 mb-9"></div>

      <span
        className={`w-full mb-2 flex justify-center items-center gap-4 text-gray-300 font-semibold uppercase cursor-pointer group`}
      >
        <a
          href={price.freelanceUrl}
          target="_blank"
          className="group-hover:mx-2 group-hover:text-main-orange transition-all duration-300 tracking-wide text-[1.3rem]"
        >
          order now
        </a>
        <FaChevronRight className="text-2xl group-hover:text-main-orange transition-all duration-300" />
      </span>
    </div>
  )
}
