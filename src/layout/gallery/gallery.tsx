import Image from 'next/image'
import { useEffect } from 'react'
import Swiper, { Navigation, SwiperOptions } from 'swiper'
import {
  Img1,
  Img10,
  Img11,
  Img12,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from './imgs'
import { CameraSvg } from './svgs'

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12]

export default function Gallery() {
  useEffect(() => {
    try {
      new Swiper('.my-swiper2', {
        modules: [Navigation],
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 21,
        initialSlide: 4,
      } as SwiperOptions)
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <section className="bg-gradient-to-b overflow-hidden from-[#EEF2F6] to-[#E7ECF2]">
      <div className="pt-[48px] pb-[80px] md:py-[96px] lg:pb-[128px]">
        <div className="flex flex-col items-center mb-[40px] md:mb-[56px]">
          <span className="flex items-center gap-[10px] mb-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold xl:mb-[16px]">
            <CameraSvg />
            GALERIA
          </span>
          <h2
            data-aos="fade-up"
            className="mb-[16px] text-[#233B37] text-[22px] leading-[30px] font-bold text-center sm:text-[27px] sm:leading-[39px] md:text-[32px] md:leading-[48px] lg:mb-[8px]"
          >
            Nossos resultados
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[#667F7B] text-[16px] leading-[24px] font-medium text-center md:text-[20px] md:leading-[30px]"
          >
            Resultados confirmados pelo <br className="lg:hidden" /> sorriso de nossos
            pacientes
          </p>
        </div>
        <div className="my-swiper2 px-[24px]">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div
                data-aos="fade-in"
                key={index}
                className="swiper-slide w-[189px] md:w-[220px] lg:w-[280px]"
              >
                <Image
                  className="select-none rounded-[6px] md:rounded-[10px] lg:rounded-[16px]"
                  src={image}
                  alt="Foto de um cliente sorrindo"
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
