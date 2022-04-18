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
    <section className="flex flex-col items-center gap-[32px] py-[64px]">
      <div className="flex flex-col items-center">
        <span className="flex items-center gap-[8px] mb-[16px] text-[14px] text-[#81540E] leading-[18px] font-medium">
          <MarkerSvg />
          ENDEREÇO
        </span>
        <h2 className="mb-[15px] text-[22px] text-[#233B37] leading-[30px] font-bold">
          Nossa localização
        </h2>
        <span className="max-w-[250px] text-[20px] text-[#667F7B] leading-[30px] font-medium text-center">
          Estamos pertinho de você, vem conhecer a gente!
        </span>
      </div>

      <div className="bg-[#A6AEB8] w-[327px] h-[327px] rounded-[8px]"></div>
      <ul className="flex flex-col items-center gap-[32px]">
        {details.map(detail => (
          <li key={detail.title} className="flex flex-col items-center gap-[8px]">
            {detail.icon}
            <h5 className="text-[20px] text-[#36414C] leading-[27px] font-semibold text-center">
              {detail.title}
            </h5>
            <p className="text-[16px] text-[#667F7B] leading-[24px] font-medium text-center">
              {detail.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
