import Image from "next/image"

interface Props {
  height: string
  imageUrl: string
  margin?: boolean
}

export default function Work({ height, imageUrl, margin }: Props) {
  return (
    <div className={`${margin ? "mb-12" : "mb-2"}`}>
      <div className={`relative w-full ${height}`}>
        <Image src={imageUrl} alt="project" objectFit="cover" layout="fill" />
      </div>
      <p className="capitalize text-gray-300 text-2xl text-center mt-6 mb-4 tracking-wide">
        weather mobile app
      </p>
      <p className="text-gray-500 text-xl text-center tracking-wide capitalize">
        project
      </p>
    </div>
  )
}
