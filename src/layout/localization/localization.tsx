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
    <section
      id="local"
      className="flex flex-col items-center gap-[40px] md:gap-[64px] py-[80px] xl:flex-row xl:justify-between xl:items-end xl:max-w-[1216px] xl:mx-auto"
    >
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

        <iframe
          className="w-[328px] h-[357px] md:w-[592px] rounded-lg border border-[rgba(0, 0, 0, 0.1)] shadow-[0_0_12px_rgba(0, 0, 0, 0.)] md:mt-[32px] xl:mt-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.6433180952681!2d-38.56256874209371!3d-3.7476228228429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749670c7a509b%3A0xcc8ca1a07e181e60!2sAv.%20Humberto%20Monte%2C%201440%20-%20Amadeu%20Furtado%2C%20Fortaleza%20-%20CE%2C%2060455-682!5e0!3m2!1spt-BR!2sbr!4v1650446120161!5m2!1spt-BR!2sbr"
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div>
        <span className="hidden max-w-[250px] mb-[64px] text-[20px] text-[#233B37] leading-[30px] font-medium text-left xl:block">
          Estamos pertinho de você, vem conhecer a gente!
        </span>
        <ul className="flex flex-col items-center gap-[48px] md:flex-row md:flex-wrap md:gap-x-[156px] md:justify-center xl:flex-col xl:items-start xl:gap-[64px] xl:max-w-[320px] xl:mr-[96px]">
          {details.map(detail => (
            <li
              key={detail.title}
              className="flex flex-col items-center gap-[8px] xl:flex-row xl:flex-wrap xl:items-start"
            >
              <div className="flex items-center gap-[16px]">
                {detail.icon}
                <h5 className="text-[20px] text-[#36414C] leading-[27px] font-semibold text-center">
                  {detail.title}
                </h5>
              </div>

              <p className="max-w-[300px] text-[16px] text-[#667F7B] leading-[24px] font-medium text-center xl:text-left">
                {detail.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
