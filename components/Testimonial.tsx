import Image from "next/image"
import { TestimonialData } from "../types"

interface Props {
  testimonial: TestimonialData
}

export default function Testimonial({ testimonial }: Props) {
  return (
    <div className="testimonial px-12 py-10 flex flex-col items-center">
      <h3 className="text-2xl italic text-gray-500 text-center font-medium tracking-wide relative mb-8 quote">
        <span className="inline-block mx-14">{testimonial.quote}</span>
      </h3>
      <Image
        src={testimonial.userImage.url}
        alt="quote user"
        width={90}
        height={90}
        objectFit="cover"
        className="rounded-full"
      />
      <h2 className="capitalize text-2xl font-semibold text-gray-300 mt-3 mb-1.5">
        {testimonial.userName}
      </h2>
      <p className="text-xl text-gray-500 capitalize mb-6">
        {testimonial.userProfession}
      </p>
    </div>
  )
}
