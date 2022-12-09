import { FaReact } from "react-icons/fa"
import Fact from "./Fact"

export default function Facts() {
  return (
    <ul className="logos grid sm:grid-cols-4 grid-cols-2 mb-12">
      <Fact Icon={FaReact} desc="100+ Albumes Listened" border />
      <Fact Icon={FaReact} desc="15+ Awards Won" border />
      <Fact Icon={FaReact} desc="10,000+ Lines Written" border />
      <Fact Icon={FaReact} desc="10+ Countries Visited" />
    </ul>
  )
}
