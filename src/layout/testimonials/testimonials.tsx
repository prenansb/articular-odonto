import { Testimonial } from '.'
import { ArrowLeftSvg, ArrowRightSvg, ShieldSvg } from './svgs'

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center overflow-hidden py-[80px] xl:max-w-[1216px] xl:mx-auto">
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

        <div className="hidden xl:flex items-center gap-[16px] self-end">
          <div className="py-[8px] px-[10px] border-2 border-[#E1AB56] rounded-[4px]">
            <span className="text-[16px] text-[#E1AB56] leading-[24px] font-semibold">
              1/12
            </span>
          </div>
          <button>
            <ArrowLeftSvg />
          </button>
          <button>
            <ArrowRightSvg />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-[16px] xl:w-full xl:gap-[40px]">
        <Testimonial />
        <Testimonial />
      </div>

      <div className="flex items-center gap-[16px] xl:hidden">
        <button>
          <ArrowLeftSvg />
        </button>
        <button>
          <ArrowRightSvg />
        </button>
      </div>
    </section>
  )
}
