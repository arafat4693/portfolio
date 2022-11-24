import Price from "./Price"
import { FaReact } from "react-icons/fa"
import PriceSkeleton from "./PriceSkeleton"

export default function Prices() {
  return (
    <ul className="prices grid grid-cols-2">
      <li className="relative vCustomLine">
        <Price Icon={FaReact} packageName="popular" price={22} />
        {/* <PriceSkeleton /> */}
      </li>
      <li>
        <Price Icon={FaReact} packageName="pro" price={45} />
        {/* <PriceSkeleton /> */}
      </li>
    </ul>
  )
}
