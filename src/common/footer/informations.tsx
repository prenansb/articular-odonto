export default function Informations() {
  return (
    <div className="flex flex-col items-center gap-8 sm:items-start sm:mb-16 sm:gap-0 sm:w-full sm:col-[2] lg:col-[3]">
      <span className="sm:mb-6 text-[22px] text-[#233B37] leading-8 font-semibold">
        Informações para contato
      </span>

      <div className="flex flex-col items-center gap-2 sm:items-start sm:mb-8">
        <span className="font-medium text-xl leading-7 text-[#36414C]">
          Endereço da clínica
        </span>
        <span className="max-w-[254px] text-center sm:text-left font-medium text-[16px] leading-[24px] text-[#667F7B]">
          <a
            href="https://goo.gl/maps/wpJ3HSvbTECPLTgQA"
            target="_blank"
            rel="noreferrer noopener"
          >
            Avenida Humberto Monte - 1440, Fortaleza, Ceará.
          </a>
        </span>
      </div>

      <div className="flex flex-col items-center gap-2 sm:items-start">
        <span className="font-medium text-xl leading-7 text-[#36414C]">
          Telefone para contato
        </span>
        <span className="flex items-center gap-2 font-medium text-[16px] leading-[24px] text-[#667F7B]">
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
        </span>
      </div>
    </div>
  )
}
