import Image from "next/image"
import { ClientData } from "../../types"

interface Props {
  client: ClientData
  border?: boolean
}

export default function BrandLogo({ client, border }: Props) {
  return (
    <div
      className={`py-16 px-12 ${
        border && "relative vCustomLine before:right-0"
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
