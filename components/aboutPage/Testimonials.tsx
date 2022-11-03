import Testimonial from "../Testimonial"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import TestimonialSkeleton from "../TestimonialSkeleton"

export default function Testimonials() {
  return (
    <div className="testimonials">
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          {/* <Testimonial /> */}
          <TestimonialSkeleton />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSkeleton />
          {/* <Testimonial /> */}
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSkeleton />
          {/* <Testimonial /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
