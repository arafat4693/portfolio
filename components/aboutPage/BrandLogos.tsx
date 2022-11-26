import React from "react"
import BrandLogo from "./BrandLogo"
import { clients } from "../../data"

export default function BrandLogos() {
  return (
    <ul className="logos grid grid-cols-4">
      {clients.map((c) => (
        <li key={c.id}>
          <BrandLogo client={c} border />
        </li>
      ))}
      {/* <li>
        <BrandLogo image="/images/google.png" border />
      </li>
      <li>
        <BrandLogo image="/images/lin.png" border />
      </li>
      <li>
        <BrandLogo image="/images/google.png" />
      </li> */}
    </ul>
  )
}
