import React from "react"
import BrandLogo from "./BrandLogo"
import ClientSkeleton from "./ClientSkeleton"

export default function BrandLogos() {
  return (
    <ul className="logos grid grid-cols-4">
      <li>
        {/* <BrandLogo image="/images/lin.png" border /> */}
        <ClientSkeleton border />
      </li>
      <li>
        {/* <BrandLogo image="/images/google.png" border /> */}
        <ClientSkeleton border />
      </li>
      <li>
        {/* <BrandLogo image="/images/lin.png" border /> */}
        <ClientSkeleton border />
      </li>
      <li>
        {/* <BrandLogo image="/images/google.png" /> */}
        <ClientSkeleton />
      </li>
    </ul>
  )
}
