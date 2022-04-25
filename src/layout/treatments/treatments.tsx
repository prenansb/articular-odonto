import { useState } from 'react'
import { Accordion, Card } from '.'
import { ClipboardSvg } from './svgs'

const accordions = [
  { number: '01', name: 'Clínico geral' },
  { number: '02', name: 'Periodontia' },
  { number: '03', name: 'Implantodontia' },
  { number: '04', name: 'Dentística' },
]

export default function Treatments() {
  const [tabActive, setTabActive] = useState('Clínico geral')

  return (
    <section
      id="tratamentos"
      className="flex flex-col items-center gap-[56px] py-[80px] xl:flex-row xl:justify-between xl:max-w-[1216px] xl:mx-auto xl:pt-[128px] xl:pb-[148px] xl:items-start"
    >
      <div className="flex flex-col items-center gap-[56px] xl:gap-[32px]">
        <div className="flex flex-col items-center gap-[8px] xl:items-start xl:mb-[32px]">
          <span className="flex items-center gap-[8px] text-[14px] text-[#81540E] leading-[18px] font-semibold md:mb-[8px] ">
            <ClipboardSvg />
            TRATAMENTOS
          </span>
          <h2 className="text-[22px] text-[#233B37 ] leading-[30px] font-bold md:text-[32px] md:leading-[48px]">
            Nossa especialidade
          </h2>
          <p className="text-[16px] text-[#667F7B] leading-[24px] font-medium text-center md:max-w-[370px] md:text-[20px] md:leading-[30px] md:text-left">
            Confira abaixo os nossos tratamentos odontológicos e solicite uma avaliação
          </p>
        </div>

        {accordions.map(accordion => (
          <Accordion
            key={accordion.number}
            informations={accordion}
            state={{ tabActive, setTabActive }}
          />
        ))}
      </div>
      <Card className="hidden xl:block xl:mt-[40px]" />
    </section>
  )
}
