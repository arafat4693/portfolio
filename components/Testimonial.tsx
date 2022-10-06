import Image from "next/image"

export default function Testimonial() {
  return (
    <div className="testimonial px-12 py-10 flex flex-col items-center">
      <h3 className="text-2xl italic text-gray-500 text-center font-medium tracking-wide relative mb-8 quote">
        <span className="inline-block mx-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          fuga excepturi officiis corrupti laboriosam quaerat.
        </span>
      </h3>
      <Image
        src="/images/pic4.png"
        alt="quote user"
        width={90}
        height={90}
        objectFit="cover"
        className="rounded-full"
      />
      <h2 className="capitalize text-2xl font-semibold text-gray-300 mt-3 mb-1.5">
        sunny islam
      </h2>
      <p className="text-xl text-gray-500 capitalize mb-8">web developer</p>
    </div>
  )
}
