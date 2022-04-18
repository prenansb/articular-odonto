import { Testimonial } from '.'
import { ArrowLeftSvg, ArrowRightSvg, ShieldSvg } from './svgs'

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center overflow-hidden py-[80px]">
      <div className="flex flex-col items-center mb-[40px]">
        <span className="flex items-center gap-[8px] mb-[8px] text-[14px] text-[#81540E] leading-[18px] font-medium">
          <ShieldSvg /> CONFIANÇA
        </span>
        <h2 className="text-[22px] text-[#233B37] leading-[30px] font-bold mb-[8px]">
          Depoimentos
        </h2>
        <p className="text-[16px] text-[##667F7B] leading-[24px] font-medium max-w-[270px] text-center">
          Confira o que nossos pacientes estão falando da Articular Odonto
        </p>
      </div>

      <div className="flex items-center gap-[16px]">
        <Testimonial />
        <Testimonial />
      </div>

      <div className="flex items-center gap-[16px]">
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
