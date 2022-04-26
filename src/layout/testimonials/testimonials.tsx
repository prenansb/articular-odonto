import Swiper, { Navigation, SwiperOptions } from 'swiper'
import { Testimonial } from '.'
import { ArrowLeftSvg, ArrowRightSvg, ShieldSvg } from './svgs'

const swiper = new Swiper('.my-swiper', {
  modules: [Navigation],
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
} as SwiperOptions)

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="flex flex-col py-[80px] overflow-hidden xl:max-w-[1216px] xl:mx-auto xl:overflow-visible"
    >
      <div className="flex flex-col items-center mb-[40px] md:mb-[56px] xl:flex-row xl:items-start xl:justify-between xl:w-full">
        <div className="flex flex-col items-center xl:items-start">
          <span className="flex items-center gap-[8px] mb-[8px] text-[14px] text-[#81540E] leading-[18px] font-semibold">
            <ShieldSvg /> CONFIANÇA
          </span>
          <h2 className="text-[22px] text-[#233B37] leading-[30px] font-bold mb-[16px] md:text-[32px] md:leading-[48px]">
            Depoimentos
          </h2>
          <p className="text-[16px] text-[#667F7B] leading-[24px] font-medium max-w-[270px] text-center md:text-[20px] md:leading-[30px] md:max-w-[320px] xl:text-left">
            Confira o que nossos pacientes estão falando da Articular Odonto
          </p>
        </div>

        <div className="hidden xl:flex items-center gap-[16px] self-end xl:gap-[24px]">
          <div className="py-[8px] px-[10px] border-2 border-[#E1AB56] rounded-[4px] mr-[8px]">
            <span className="text-[16px] text-[#E1AB56] leading-[24px] font-semibold">
              1 / 12
            </span>
          </div>
          <button className="hover:brightness-90 active:brightness-75 transition xl:scale-[1.2]">
            <ArrowLeftSvg />
          </button>
          <button className="hover:brightness-90 active:brightness-75 transition xl:scale-[1.2]">
            <ArrowRightSvg />
          </button>
        </div>
      </div>

      <div className="my-swiper px-[24px]">
        <div className="swiper-wrapper">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>

      <div className="flex items-center gap-[16px] mx-auto xl:hidden">
        <button
          onClick={() => swiper.slidePrev(300)}
          className="active:brightness-75 transition"
        >
          <ArrowLeftSvg />
        </button>
        <button
          onClick={() => swiper.slideNext(300)}
          className="active:brightness-75 transition"
        >
          <ArrowRightSvg />
        </button>
      </div>
    </section>
  )
}
