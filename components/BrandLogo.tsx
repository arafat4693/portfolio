import Image from "next/image"

interface Props {
  image: string
  border?: boolean
}

export default function BrandLogo({ image, border }: Props) {
  return (
    <div
      className={`h-60 w-full flex items-center justify-center px-12 ${
        border && "relative vCustomLine"
      }`}
    >
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block relative w-full h-12"
      >
        <Image
          src={image}
          alt="linkedin"
          layout="fill"
          objectFit="contain"
          className="opacity-50 transition-all duration-300 hover:opacity-100"
        />
      </a>
    </div>
  )
}
