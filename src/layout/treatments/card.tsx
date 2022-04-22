import { CheckSvg, WhatsappSvg } from './svgs'

const treatments = ['Tratamento de canal', 'Extração', 'Restauração']

type CardProps = {
  className?: string
}

export default function Card({ className }: CardProps) {
  return (
    <div
      className={`flex flex-col items-start p-[24px] rounded-[8px] bg-[#E7ECF2] ${className} xl:p-[32px]`}
    >
      <h5 className="mb-[8px] text-[#233B37] text-[24px] leading-[36px] font-medium md:text-[32px] md:leading-[48px]">
        Clínico geral
      </h5>
      <p className="max-w-[279px] mb-[32px] text-[#667F7B] text-[14px] leading-[21px] font-normal md:text-[16px] md:leading-[24px] md:max-w-[456px]">
        Seus procedimentos objetivam prevenir, diagnosticar e tratar problemas
        relacionados a tratamento de canal, extração e restauração.
      </p>
      <div className="w-full py-[8px] px-[16px] mb-[32px] bg-gradient-to-r from-[#E1AB56] to-[rgba(225, 171, 86, 0)] text-[#F6F6F8] text-[18px] leading-[21px] font-semibold md:w-[528px]">
        Tratamentos
      </div>
      <ul className="flex flex-col gap-[21px] mb-[56px]">
        {treatments.map(treatment => (
          <li
            key={treatment}
            className="flex items-center gap-[8px] text-[#246B5F] text-[16px] leading-[24px] font-semibold md:text-[18px] md:leading-[21px]"
          >
            <CheckSvg />
            {treatment}
          </li>
        ))}
      </ul>
      <button className="flex items-center justify-center gap-[16px] self-center w-full bg-[#54B6AE] rounded-[4px] py-[14px] px-[32px]">
        <WhatsappSvg />
        <a href="#" className="text-[14px] text-[#FFFFFF] font-medium leading-[21px]">
          Agende sua consulta
        </a>
      </button>
    </div>
  )
}
