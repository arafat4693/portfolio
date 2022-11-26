import Testimonial from "../Testimonial"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import TestimonialSkeleton from "../TestimonialSkeleton"
import profileOperations from "../../graphqlOperations/profile"
import { useQuery } from "@apollo/client"
import { TestimonialData } from "../../types"

interface TestimonialQuery {
  testimonials: TestimonialData[]
}

export default function Testimonials() {
  const { data, loading, error } = useQuery<TestimonialQuery>(
    profileOperations.Queries.getTestimonials
  )

  if (error) {
    console.log(error)
    return <TestimonialSkeleton />
  }

  if (loading || data === undefined) return <TestimonialSkeleton />

  return (
    <div className="testimonials">
      <Swiper pagination={true} modules={[Pagination]}>
        {data.testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <Testimonial testimonial={t} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}
