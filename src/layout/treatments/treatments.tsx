import { Accordion } from '.'
import { ClipboardSvg } from './svgs'

export default function Treatments() {
  return (
    <section className="flex flex-col items-center gap-[56px] py-[80px]">
      <div className="flex flex-col items-center gap-[8px]">
        <span className="flex items-center gap-[8px] text-[14px] text-[#81540E] leading-[18px] font-semibold">
          <ClipboardSvg />
          TRATAMENTOS
        </span>
        <h2 className="text-[22px] text-[#233B37 ] leading-[30px] font-bold ">
          Nossa especialidade
        </h2>
        <p className="text-[16px] text-[#667F7B] leading-[24px] font-medium text-center">
          Confira abaixo os nossos tratamentos odontológicos e solicite uma avaliação
        </p>
      </div>

      <Accordion />
    </section>
  )
}
