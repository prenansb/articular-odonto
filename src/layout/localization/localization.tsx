import { ClockSvg, MarkerSvg, PhoneSvg, SecondaryMarkerSvg } from "./svgs"

export default function Location() {
  return (
    <section
      id="local"
      className="py-[80px] lg:max-w-[1312px] lg:px-[48px] lg:mx-auto"
    >
      <div className="flex flex-col items-center gap-[16px] mb-[40px] md:mb-[64px] lg:items-end lg:justify-between lg:flex-row">
        <div data-aos="fade-right">
          <span className="flex items-center justify-center lg:justify-start gap-[8px] text-[14px] text-[#81540E] leading-[18px] font-semibold mb-[16px]">
            <MarkerSvg />
            ENDEREÇO
          </span>
          <h2 className="text-[22px] text-[#233B37] leading-[30px] font-bold md:text-[32px] md:leading-[48px]">
            Nossa localização
          </h2>
        </div>
        <span
          data-aos="fade-left"
          className="text-[20px] text-[#667F7B] leading-[30px] font-medium text-center md:text-[20px] md:leading-[30px] lg:text-left lg:text-[#233B37] lg:w-[320px]"
        >
          Estamos pertinho de você, <br /> vem conhecer a gente!
        </span>
      </div>

      <div className="flex flex-col items-center gap-[56px] lg:flex-row lg:justify-between lg:items-start lg:gap-0">
        <iframe
          data-aos="fade-right"
          className="w-[328px] h-[357px] md:w-[592px] rounded-lg border border-[rgba(0, 0, 0, 0.1)] shadow-[0_0_12px_rgba(0, 0, 0, 0.)]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.6433180952681!2d-38.56256874209371!3d-3.7476228228429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749670c7a509b%3A0xcc8ca1a07e181e60!2sAv.%20Humberto%20Monte%2C%201440%20-%20Amadeu%20Furtado%2C%20Fortaleza%20-%20CE%2C%2060455-682!5e0!3m2!1spt-BR!2sbr!4v1650446120161!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <ul className="flex flex-col items-center gap-[48px] md:flex-row md:flex-wrap md:gap-x-[156px] md:justify-center lg:flex-col lg:gap-[64px] lg:max-w-[320px]">
          <li
            data-aos="fade-left"
            className="flex flex-col items-center gap-[8px] lg:flex-row lg:flex-wrap"
          >
            <div className="flex flex-col items-center gap-[8px] lg:flex-row">
              <ClockSvg />
              <h5 className="text-[20px] text-[#36414C] leading-[27px] font-semibold text-center">
                Horários de atendimento
              </h5>
            </div>

            <span className="max-w-[300px] text-[16px] text-[#667F7B] leading-[24px] font-medium text-center lg:text-left">
              Segunda a Sexta: 08h30 às 19h00 Sábado: 08h30 às 12h00
            </span>
          </li>
          <li
            data-aos="fade-left"
            className="flex flex-col items-center gap-[8px] lg:flex-row lg:flex-wrap"
          >
            <div className="flex flex-col items-center gap-[8px] lg:flex-row">
              <SecondaryMarkerSvg />
              <h5 className="text-[20px] text-[#36414C] leading-[27px] font-semibold text-center">
                Endereço da clínica
              </h5>
            </div>

            <a
              href="https://goo.gl/maps/wpJ3HSvbTECPLTgQA"
              target="_blank"
              rel="noreferrer noopener"
              className="max-w-[300px] text-[16px] text-[#667F7B] leading-[24px] font-medium text-center lg:text-left"
            >
              Avenida Humberto Monte - 1440, Fortaleza, Ceará.
            </a>
          </li>
          <li
            data-aos="fade-left"
            className="flex flex-col items-center gap-[8px] lg:flex-row lg:flex-wrap"
          >
            <div className="flex flex-col items-center gap-[8px] lg:flex-row">
              <PhoneSvg />
              <h5 className="text-[20px] text-[#36414C] leading-[27px] font-semibold text-center">
                Telefone para contato
              </h5>
            </div>

            <div className="flex items-center gap-2 max-w-[300px] text-[16px] text-[#667F7B] leading-[24px] font-medium text-center lg:text-left">
              <a
                href="tel:+55-85-3283-4784"
                target="_self"
                rel="noreferrer noopener"
              >
                (85) 3283-4784
              </a>
              ou
              <a
                href="tel:+55-85-98800-0778"
                target="_self"
                rel="noreferrer noopener"
              >
                (85) 9 8800-0778
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
