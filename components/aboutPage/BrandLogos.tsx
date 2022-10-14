import React from "react"
import BrandLogo from "./BrandLogo"

export default function BrandLogos() {
  return (
    <ul className="logos grid grid-cols-4">
      <li>
        <BrandLogo image="/images/lin.png" border />
      </li>
      <li>
        <BrandLogo image="/images/google.png" border />
      </li>
      <li>
        <BrandLogo image="/images/lin.png" border />
      </li>
      <li>
        <BrandLogo image="/images/google.png" />
      </li>
    </ul>
  )
}
