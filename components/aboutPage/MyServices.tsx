import MyService from "./MyService"
import { services } from "../../data"
import { ServiceData } from "../../types"

export default function MyServices() {
  return (
    <ul className="services grid grid-cols-2">
      <li className="relative vCustomLine">
        {services
          .slice(0, Math.round(services.length / 2))
          .map((s: ServiceData, idx) => (
            <MyService
              key={s.id}
              name={s.title}
              desc={s.description}
              Icon={s.Icon}
              border={idx !== Math.round(services.length / 2) - 1}
            />
          ))}
      </li>

      <li>
        {services.slice(Math.round(services.length / 2)).map((s, idx) => (
          <MyService
            key={s.id}
            name={s.title}
            desc={s.description}
            Icon={s.Icon}
            border={
              Math.round(services.length / 2) + idx !== services.length - 1
            }
          />
        ))}
      </li>
    </ul>
  )
}
