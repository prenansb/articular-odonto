import { useEffect, useState } from 'react'
import Swiper, { Navigation, type SwiperOptions } from 'swiper'
import type SwiperClass from 'swiper/types/swiper-class'
import { Testimonial } from '.'
import { ArrowLeftSvg, ArrowRightSvg, ShieldSvg } from './svgs'

const patientReviews = [
  {
    key: 1,
    patient: 'Felipe Batista',
    review:
      '"Fiquei impressionado com a equipe. Profissionais muito experientes e não tentaram me convencer sobre procedimentos que eu não precisava necessariamente. Recomendo a todos que precisam de atendimento odontológico."',
  },
  {
    key: 2,
    patient: 'Franscisco Sousa',
    review:
      '"Primeira vez fazendo uma limpeza profunda. O Dentista foi incrível. Ele me deixou à vontade e fez um excelente trabalho. O consultório está sempre limpo e a equipe é profissional. Eu recomendo."',
  },
  {
    key: 3,
    patient: 'Claúdio',
    review:
      '"Tive que fazer uma consulta de emergência no mesmo dia devido a dores nos dentes. O dentista e toda a equipe foram compreensivos, empáticos e realmente me fizeram sentir que eles queriam que eu melhorasse rapidamente."',
  },
  {
    key: 4,
    patient: 'Amanda',
    review:
      '"Meus dentistas foram incríveis. Eu costumava ter más experiências com limpezas dentárias devido a algum nível de dor. Mas eles lidou com isso com extremo cuidado."',
  },
  {
    key: 5,
    patient: 'Monique Ribeiro',
    review:
      '"Um lugar limpo e maravilhoso com um dentista que você realmente espera visitar. A equipe é atenciosa e você nunca precisa esperar. Excelentes dentistas"',
  },
]

export default function Testimonials() {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [sliderIndex, setSliderIndex] = useState<number>(1)
  const [sliderLastIndex, setSliderLastIndex] = useState<number>(0)

  useEffect(() => {
    const swiperInstance = new Swiper('.my-swiper', {
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
        init: (props: any) => {
          setSliderIndex(props.activeIndex)
          setSliderLastIndex(props.snapGrid.length)
        },
        slideChange: props => {
          setSliderIndex(props.activeIndex)
        },
      },
    } as SwiperOptions)

    setSwiper(swiperInstance)
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
            {patientReviews.map(p => (
              <Testimonial key={p.key} patient={p.patient} review={p.review} />
            ))}
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
