import MyService from "./MyService"
import { services } from "../../data"
import { ServiceData } from "../../types"

export default function MyServices() {
  return (
    <ul className="services grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:left-1/2 before:hidden sm:before:block before:-translate-x-1/2">
      {services.map((s: ServiceData, idx) => (
        <MyService
          key={s.id}
          name={s.title}
          desc={s.description}
          Icon={s.Icon}
          border={idx < services.length - 2}
          last={idx === services.length - 1}
        />
      ))}
    </ul>
  )
}
