import { FaReact } from "react-icons/fa"
import Coding from "./Coding"
import Development from "./Development"
import IconTitle from "./IconTitle"
import Knowledge from "./Knowledge"
import Languages from "./Languages"

export default function Skills() {
  return (
    <>
      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine py-6 px-12">
          <IconTitle title="coding" Icon={FaReact} />
          <Coding />
        </li>
        <li className="py-6 px-12">
          <IconTitle title="knowledge" Icon={FaReact} />
          <Knowledge />
        </li>
      </ul>

      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine py-6 px-12">
          <IconTitle title="font-end" Icon={FaReact} />
          <Development />
        </li>
        <li className="py-6 px-12">
          <IconTitle title="languages" Icon={FaReact} />
          <Languages />
        </li>
      </ul>
    </>
  )
}
