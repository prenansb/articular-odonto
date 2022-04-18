import { CheckSvg, WhatsappSvg } from './svgs'

const treatments = ['Tratamento de canal', 'Extração', 'Restauração']

export default function Card() {
  return (
    <div className="">
      <div className="bg-[#54B6AE] p-[24px] pb-[44px] rounded-t-lg">
        <h5 className="text-[#FFFFFF] text-[24px] leading-[36px] font-medium">
          Clínico geral
        </h5>
      </div>
      <div className="bg-[#233B37] relative p-[24px] pt-[42px] rounded-b-lg">
        <div className="flex items-center justify-center absolute top-[-20px] w-[141px] h-[37px] rounded-[2px] bg-[#E1AB56]">
          <span className="text-[#F6F6F8] text-[18px] leading-[21px] font-semibold">
            Tratamentos
          </span>
        </div>
        <ul className="flex flex-col gap-[21px] mb-[56px]">
          {treatments.map(treatment => (
            <li
              key={treatment}
              className="flex items-center gap-[10px] text-[#F6F6F8] text-[16px] leading-[24px] font-semibold"
            >
              <CheckSvg />
              {treatment}
            </li>
          ))}
        </ul>
        <button className="flex items-center justify-center gap-[20px] bg-[#54B6AE] rounded-[4px] py-[14px] px-[32px]">
          <WhatsappSvg />
          <a href="#" className="text-[14px] text-[#FFFFFF] font-medium leading-[21px]">
            Agende sua consulta
          </a>
        </button>
      </div>
    </div>
  )
}
