import React from "react"
import BrandLogo from "./BrandLogo"
import { clients } from "../../data"

export default function BrandLogos() {
  return (
    <ul className="logos grid grid-cols-4">
      {clients.map((c, idx) => (
        <li key={c.id}>
          <BrandLogo client={c} border={idx !== clients.length - 1} />
        </li>
      ))}
    </ul>
  )
}
