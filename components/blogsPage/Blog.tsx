import Image from "next/image"

interface Props {
  imageUrl: string
  releasedDate: string
}

export default function Blog({ imageUrl, releasedDate }: Props) {
  return (
    <div className={`cursor-pointer group mb-12`}>
      <div className={`relative w-full h-80`}>
        <Image
          src={imageUrl}
          alt="blog"
          objectFit="cover"
          layout="fill"
          className="group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <h2
        className={`text-main-orange border-main-orange mt-7 border border-solid text-xl py-0.5 px-3 tracking-wide inline-block relative left-1/2 -translate-x-1/2`}
      >
        {releasedDate}
      </h2>
      <p className="text-gray-300 text-2xl text-center font-medium mt-5 mb-4 tracking-wide group-hover:text-main-orange transition-all duration-300">
        By spite about do of allow
      </p>
      <p className="text-[1.4rem] text-gray-400 text-center leading-relaxed tracking-wide cursor-text">
        So striking at of to welcomed resolved. Northward by described up
        household therefore attention. Excellence nay man yet impres for
        contrasted remarkably.
      </p>
    </div>
  )
}
