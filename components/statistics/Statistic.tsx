import { StatisticsData } from "../../types"

export default function Statistic({ title, info }: StatisticsData) {
  return (
    <li className="rounded-xl bg-gray-800 py-4 px-8">
      <h3 className="text-3xl mb-2.5 tracking-wider font-medium capitalize text-white">
        {title}
      </h3>
      <p className="text-[1.6rem] text-gray-400">{info}</p>
    </li>
  )
}
