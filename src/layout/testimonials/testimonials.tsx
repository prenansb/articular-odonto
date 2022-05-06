import { useEffect, useState } from 'react'
import Swiper, { Navigation, type SwiperOptions } from 'swiper'
import type SwiperClass from 'swiper/types/swiper-class'
import { Testimonial } from '.'
import { ArrowLeftSvg, ArrowRightSvg, ShieldSvg } from './svgs'

export default function Testimonials() {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [sliderIndex, setSliderIndex] = useState<number>(1)
  const [sliderLastIndex, setSliderLastIndex] = useState<number>(0)

  useEffect(() => {
    const swiper = new Swiper('.my-swiper', {
      modules: [Navigation],
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      breakpoints: {
        768: {
          centeredSlides: false,
          spaceBetween: 32,
        },
        1024: {
          centeredSlides: false,
          spaceBetween: 40,
        },
      },
      on: {
        init: (swiper: any) => {
          setSliderIndex(swiper.activeIndex)
          setSliderLastIndex(swiper.snapGrid.length)
        },
        slideChange: swiper => {
          setSliderIndex(swiper.activeIndex)
        },
      },
    } as SwiperOptions)

    setSwiper(swiper)
  }, [])

  return (
    <section
      id="depoimentos"
      className="py-[80px] lg:max-w-[1312px] lg:px-[48px] lg:mx-auto"
    >
      <div className="overflow-hidden">
        <div className="flex flex-col items-center mb-[40px] sm:mb-[48px] md:mb-[56px] lg:flex-row lg:items-start lg:justify-between lg:w-full">
          <div className="flex flex-col items-center lg:items-start">
            <span className="flex items-center gap-[8px] mb-[8px] text-[14px] text-[#81540E] leading-[18px] font-semibold">
              <ShieldSvg /> CONFIANÇA
            </span>
            <h2 className="text-[22px] text-[#233B37] leading-[30px] font-bold mb-[16px] sm:text-[27px] sm:leading-[39px] md:text-[32px] md:leading-[48px]">
              Depoimentos
            </h2>
            <p className="text-[16px] text-[#667F7B] leading-[24px] font-medium text-center sm:text-[18px] sm:leading-[27px] md:text-[20px] md:leading-[30px] lg:text-left">
              Confira o que nossos pacientes <br /> estão falando da Articular Odonto
            </p>
          </div>

          <div className="hidden lg:flex items-center self-end gap-[16px]">
            <div className="py-[8px] px-[10px] border-2 border-[#E1AB56] rounded-[4px] mr-[8px]">
              <span className="text-[16px] text-[#E1AB56] leading-[24px] font-semibold">
                {sliderIndex + 1} / {sliderLastIndex}
              </span>
            </div>
            <button
              onClick={() => swiper?.slidePrev(300)}
              className="hover:brightness-90 active:brightness-75 transition"
            >
              <ArrowLeftSvg />
            </button>
            <button
              onClick={() => swiper?.slideNext(300)}
              className="hover:brightness-90 active:brightness-75 transition"
            >
              <ArrowRightSvg />
            </button>
          </div>
        </div>

        <div className="my-swiper px-[24px] md:px-[48px] lg:px-0">
          <div className="swiper-wrapper">
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>

        <div className="flex justify-center gap-[16px] mx-auto xl:hidden lg:hidden">
          <button
            onClick={() => swiper?.slidePrev(300)}
            className="active:brightness-75 transition"
          >
            <ArrowLeftSvg />
          </button>
          <button
            onClick={() => swiper?.slideNext(300)}
            className="active:brightness-75 transition"
          >
            <ArrowRightSvg />
          </button>
        </div>
      </div>
    </section>
  )
}
