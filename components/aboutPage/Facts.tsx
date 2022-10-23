import { FaReact } from "react-icons/fa"
import Fact from "./Fact"

export default function Facts() {
  return (
    <ul className="logos grid grid-cols-4 mb-12">
      <li>
        <Fact Icon={FaReact} desc="100+ Albumes Listened" border />
      </li>
      <li>
        <Fact Icon={FaReact} desc="15+ Awards Won" border />
      </li>
      <li>
        <Fact Icon={FaReact} desc="10,000+ Lines Written" border />
      </li>
      <li>
        <Fact Icon={FaReact} desc="10+ Countries Visited" border />
      </li>
    </ul>
  )
}
