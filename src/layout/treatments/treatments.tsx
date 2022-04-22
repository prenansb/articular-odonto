import { Accordion, Card } from '.'
import { ClipboardSvg } from './svgs'

export default function Treatments() {
  return (
    <section className="flex flex-col items-center gap-[56px] py-[80px] xl:flex-row xl:justify-between xl:max-w-[1216px] xl:mx-auto xl:pt-[128px] xl:pb-[148px] xl:items-start">
      <div className="flex flex-col items-center gap-[56px] xl:gap-[64px]">
        <div className="flex flex-col items-center gap-[8px] xl:items-start">
          <span className="flex items-center gap-[8px] text-[14px] text-[#81540E] leading-[18px] font-semibold md:mb-[8px] ">
            <ClipboardSvg />
            TRATAMENTOS
          </span>
          <h2 className="text-[22px] text-[#233B37 ] leading-[30px] font-bold md:text-[32px] md:leading-[48px]">
            Nossa especialidade
          </h2>
          <p className="text-[16px] text-[#667F7B] leading-[24px] font-medium text-center md:max-w-[370px] md:text-[20px] md:leading-[30px]">
            Confira abaixo os nossos tratamentos odontológicos e solicite uma avaliação
          </p>
        </div>

        <Accordion />
      </div>
      <Card className="hidden xl:block xl:mt-[40px]" />
    </section>
  )
}
