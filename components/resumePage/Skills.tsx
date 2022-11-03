import { FaReact } from "react-icons/fa"
import BackEnd from "./BackEnd"
import FrontEnd from "./FrontEnd"
import IconTitle from "./IconTitle"
import Knowledge from "./Knowledge"
import Languages from "./Languages"

export default function Skills() {
  return (
    <>
      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine py-6 px-12">
          <IconTitle title="back-end" Icon={FaReact} />
          <BackEnd />
        </li>
        <li className="py-6 px-12">
          <IconTitle title="knowledge" Icon={FaReact} />
          <Knowledge />
        </li>
      </ul>

      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine py-6 px-12">
          <IconTitle title="font-end" Icon={FaReact} />
          <FrontEnd />
        </li>
        <li className="py-6 px-12">
          <IconTitle title="languages" Icon={FaReact} />
          <Languages />
        </li>
      </ul>
    </>
  )
}
