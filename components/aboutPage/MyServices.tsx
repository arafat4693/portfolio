import MyService from "./MyService"
import { FaReact } from "react-icons/fa"
import ServiceSkeleton from "./ServiceSkeleton"

export default function MyServices() {
  return (
    <ul className="services grid grid-cols-2">
      <li className="relative vCustomLine">
        {/* <ServiceSkeleton border />
        <ServiceSkeleton /> */}
        <MyService name="front-end" Icon={FaReact} border />
        <MyService name="front-end" Icon={FaReact} />
      </li>
      <li>
        <MyService name="front-end" Icon={FaReact} border />
        <MyService name="front-end" Icon={FaReact} />
        {/* <ServiceSkeleton border />
        <ServiceSkeleton /> */}
      </li>
    </ul>
  )
}
