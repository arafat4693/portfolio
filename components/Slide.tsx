import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper"
import "swiper/css"
import Image from "next/image"
import "swiper/css/effect-fade"

interface Props {
  images: { url: string }[]
}

export default function Slide({ images }: Props) {
  return (
    <div className="bgSlider h-[32rem] overflow-hidden rounded-lg relative before:content-[''] before:absolute before:z-20 before:-left-8 before:-right-8 before:-bottom-[6.72rem] w-auto before:h-40 before:bg-gray-900 before:rounded-tl-[100%] before:rounded-tr-[100%]">
      <Swiper
        effect={"fade"}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full relative">
              <Image
                src={img.url}
                alt="tour"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
