import { FaChevronRight } from "react-icons/fa"

interface Props {
  Icon: any
  packageName: string
  price: number
}

export default function Price({ Icon, packageName, price }: Props) {
  return (
    <div className="py-10 px-12 flex flex-col items-center">
      <div className="icon w-24 h-24 rounded-full border-2 border-main-orange border-solid flex items-center justify-center">
        <Icon className="text-5xl text-main-orange" />
      </div>
      <h3 className="text-[1.6rem] text-gray-300 font-semibold capitalize mt-6">
        {packageName}
      </h3>
      <div className="amount inline-flex items-center gap-4 my-6">
        <sup className="text-[1.6rem] text-gray-300">$</sup>
        <span className="text-[4.2rem] text-gray-300 font-semibold">
          {price}
        </span>
        <sub className="text-[1.6rem] text-gray-300 mt-4">hour</sub>
      </div>
      <p className="text-2xl text-gray-400 mb-5">WorPress Development</p>
      <p className="text-2xl text-gray-400 mb-5">Installation Services</p>
      <p className="text-2xl text-gray-400 mb-5">SEO Audit</p>
      <p className="text-2xl text-gray-400 mb-5 line-through decoration-2">
        Hosting & Domain
      </p>
      <p className="text-2xl text-gray-400 line-through decoration-2 mb-5">
        WordPress Securityt
      </p>

      <div className="w-full h-[0.1rem] lineLeft mt-4 mb-9"></div>

      <span
        className={`w-full mb-2 flex justify-center items-center gap-4 text-gray-300 font-semibold uppercase cursor-pointer group`}
      >
        <a
          href="/"
          className="group-hover:mx-2 group-hover:text-main-orange transition-all duration-300 tracking-wide text-[1.3rem]"
        >
          order now
        </a>
        <FaChevronRight className="text-2xl group-hover:text-main-orange transition-all duration-300" />
      </span>
    </div>
  )
}
