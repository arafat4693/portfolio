import Image from "next/image"
import { ClientData } from "../../types"

interface Props {
  client: ClientData
  border: boolean
  pos: number
}

export default function BrandLogo({ client, border, pos }: Props) {
  return (
    <div
      className={`py-16 px-12 relative vCustomLine before:right-0 ${
        border
          ? `${pos === 1 ? "before:hidden" : "before:block"}`
          : "before:hidden"
      }`}
    >
      <a
        href={client.linkLocation}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block relative w-full h-12"
      >
        <Image
          src={client.imgLocation}
          alt="linkedin"
          layout="fill"
          objectFit="contain"
          className="opacity-50 transition-all duration-300 hover:opacity-100"
        />
      </a>
    </div>
  )
}
