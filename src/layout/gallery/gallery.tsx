import Image from 'next/image'
import Swiper, { Navigation, SwiperOptions } from 'swiper'
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7 } from './imgs'
import { CameraSvg } from './svgs'

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]

const swiper = new Swiper('.my-swiper2', {
  modules: [Navigation],
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 21,
  initialSlide: 3,
} as SwiperOptions)

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b overflow-hidden from-[#EEF2F6] to-[#E7ECF2]">
      <div className="pt-[48px] pb-[80px] md:py-[96px]">
        <div className="flex flex-col items-center mb-[40px] md:mb-[56px]">
          <span className="flex items-center gap-[10px] mb-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold xl:mb-[16px]">
            <CameraSvg />
            GALERIA
          </span>
          <h2 className="mb-[16px] text-[#233B37] text-[22px] leading-[30px] font-bold text-center md:text-[32px] md:leading-[48px] xl:mb-[8px]">
            Nossos resultados
          </h2>
          <p className="text-[#667F7B] text-[16px] leading-[24px] font-medium text-center max-w-[220px] md:text-[20px] md:leading-[30px] md:max-w-[275px] xl:max-w-[550px]">
            Resultados confirmados pelo sorriso de nossos pacientes
          </p>
        </div>
        <div className="my-swiper2 px-[24px]">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div key={index} className="swiper-slide w-fit h-fit">
                <Image
                  src={image}
                  width={189}
                  height={189}
                  alt="Foto de um cliente sorrindo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
