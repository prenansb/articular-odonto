import { ClockSvg, MarkerSvg, PhoneSvg, SecondaryMarkerSvg } from './svgs'

const details = [
  {
    title: 'Horários de atendimento',
    description: `Segunda a Sexta: 08h30 às 19h00
      Sábado: 08h30 às 12h00`,
    icon: <ClockSvg />,
  },
  {
    title: 'Endereço da clínica',
    description: `Avenida Humberto Monte - 1440, 
    Fortaleza, Ceará.`,
    icon: <SecondaryMarkerSvg />,
  },
  {
    title: 'Telefone para contato',
    description: `(85) 9.999-9999 ou (85) 9.999-9999 `,
    icon: <PhoneSvg />,
  },
]

export default function Location() {
  return (
    <section className="flex flex-col items-center gap-[40px] py-[80px] xl:flex-row xl:justify-between xl:max-w-[1216px] xl:mx-auto">
      <div className="flex flex-col items-center gap-[16px] xl:items-start">
        <span className="flex items-center gap-[8px] text-[14px] text-[#81540E] leading-[18px] font-semibold">
          <MarkerSvg />
          ENDEREÇO
        </span>
        <h2 className="text-[22px] text-[#233B37] leading-[30px] font-bold md:text-[32px] md:leading-[48px] xl:mb-[48px]">
          Nossa localização
        </h2>
        <span className="max-w-[250px] text-[16px] text-[#667F7B] leading-[24px] font-medium text-center md:text-[20px] md:leading-[30px] xl:hidden">
          Estamos pertinho de você, vem conhecer a gente!
        </span>

        <div className="hidden bg-[#A6AEB8] w-[684px] h-[357px] rounded-[8px] mb-[16px] md:mb-[24px] xl:block"></div>
      </div>

      <div className="bg-[#A6AEB8] w-[327px] h-[327px] rounded-[8px] mb-[16px] md:mb-[24px] xl:hidden"></div>

      <ul className="flex flex-col items-center gap-[48px] md:flex-row md:max-w-[672px] md:flex-wrap md:justify-center xl:flex-col xl:items-start xl:gap-[62p]x xl:max-w-[320px]">
        <span className="hidden max-w-[250px] text-[16px] text-[#667F7B] leading-[24px] font-medium text-center md:text-[20px] md:leading-[30px] xl:block xl:text-left">
          Estamos pertinho de você, vem conhecer a gente!
        </span>
        {details.map(detail => (
          <li
            key={detail.title}
            className="flex flex-col items-center gap-[8px] xl:mb-[2px] xl:flex-row xl:flex-wrap xl:items-start"
          >
            {detail.icon}
            <h5 className="text-[20px] text-[#36414C] leading-[27px] font-semibold text-center">
              {detail.title}
            </h5>
            <p className="max-w-[300px] text-[16px] text-[#667F7B] leading-[24px] font-medium text-center xl:text-left">
              {detail.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
