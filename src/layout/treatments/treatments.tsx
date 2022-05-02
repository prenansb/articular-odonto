import { useState } from 'react'
import { Accordion, Card } from '.'
import { ClipboardSvg } from './svgs'

const accordions = [
  {
    number: '01',
    name: 'Clínico geral',
    description:
      'Seus procedimentos objetivam prevenir, diagnosticar e tratar problemas relacionados a tratamento de canal, extração e restauração.',
    treatments: ['Tratamento de canal', 'Extração', 'Restauração'],
  },
  {
    number: '02',
    name: 'Periodontia',
    description:
      'Seus procedimentos objetivam prevenir, diagnosticar e tratar problemas e doenças que atingem a gengiva, o ligamento periodontal e o osso alveolar.',
    treatments: ['Profilaxia', null],
  },
  {
    number: '03',
    name: 'Implantodontia',
    description:
      'O trabalho da implantodontia consiste na reconstrução de parte do dente por meio de um implante, instalado no osso do maxilar ou mandíbula por processo cirúrgico.',
    treatments: ['Prótese', 'Implante', null],
  },
  {
    number: '04',
    name: 'Dentística',
    description:
      'Os profissionais desta especialidade tratam de clareamentos dos dentes, uso de resinas diretas, facetas, lentes de contato dental, e restaurações estéticas.',
    treatments: ['Lentes de contato', 'Clareamento', 'Facetas'],
  },
]

export default function Treatments() {
  const [tabActive, setTabActive] = useState('Clínico geral')

  const accordionActive = accordions.filter(accordion => accordion.name === tabActive)[0]

  return (
    <section
      id="tratamentos"
      className="flex justify-between py-[80px] lg:max-w-[1312px] lg:px-[48px] lg:mx-auto xl:pt-[128px] xl:pb-[148px]"
    >
      <div className="w-full lg:w-auto">
        <div className="flex flex-col items-center mb-[56px] gap-[8px] lg:items-start lg:mb-[64px]">
          <span className="flex items-center gap-[8px] text-[14px] text-[#81540E] leading-[18px] font-semibold sm:mb-[4px] md:mb-[8px] ">
            <ClipboardSvg />
            TRATAMENTOS
          </span>
          <h2 className="text-[22px] text-[#233B37 ] leading-[30px] font-bold sm:text-[27px] sm:leading-[39px] md:text-[32px] md:leading-[48px]">
            Nossa especialidade
          </h2>
          <p className="max-w-[286px] text-[16px] text-[#667F7B] leading-[24px] font-medium text-center sm:text-[18px] sm:leading-[27px] sm:max-w-[370px] md:text-[20px] md:leading-[30px] lg:text-left">
            Confira abaixo os nossos tratamentos odontológicos e solicite uma avaliação
          </p>
        </div>

        <ul className="flex flex-col w-fit mx-auto items-center gap-[32px] lg:mx-0">
          {accordions.map(accordion => (
            <Accordion
              key={accordion.number}
              informations={accordion}
              state={{ tabActive, setTabActive }}
            />
          ))}
        </ul>
      </div>
      <Card informations={accordionActive} isTabActive isDesktop />
    </section>
  )
}
