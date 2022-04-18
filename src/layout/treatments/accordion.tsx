import { Card } from '.'

export default function Accordion() {
  return (
    <div className="flex flex-col items-center gap-[32px]">
      <div>
        <div className="flex items-center gap-[16px] mb-[24px]">
          <span className="text-[#40C8BD] text-[18px] leading-[27px] font-medium">
            01
          </span>
          <span className="text-[#246B5F] text-[24px] leading-[36px] font-medium">
            Clínico geral
          </span>
        </div>
        <div className="mb-[40px] w-[327px] h-[1px] bg-[#40C8BD]"></div>
        <Card />
      </div>

      <div>
        <div className="flex items-center gap-[16px] mb-[24px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            02
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Periodontia
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9]"></div>
        {/* <Card /> */}
      </div>

      <div>
        <div className="flex items-center gap-[16px] mb-[24px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            03
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Implantodontia
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9]"></div>
        {/* <Card /> */}
      </div>

      <div>
        <div className="flex items-center gap-[16px] mb-[24px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            04
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Dentística
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9]"></div>
        {/* <Card /> */}
      </div>
    </div>
  )
}
