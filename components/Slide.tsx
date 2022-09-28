import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper"
import "swiper/css"
import Image from "next/image"
import "swiper/css/effect-fade"

export default function Slide() {
  return (
    <div className="h-[34rem] overflow-hidden rounded-lg relative before:content-[''] before:absolute before:z-10 before:-left-8 before:-right-8 before:-bottom-[6.72rem] w-auto before:h-40 before:bg-gray-900 before:rounded-tl-[100%] before:rounded-tr-[100%]">
      <Swiper
        loop={true}
        effect={"fade"}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <Image
              src="/images/g-7.jpg"
              alt="tour"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/g-9.jpg"
              alt="tour"
              layout="fill"
              objectFit="cover"
            />
            2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/p-2.jpg"
              alt="tour"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
