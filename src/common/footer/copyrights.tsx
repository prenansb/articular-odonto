import { GhostSvg } from './svgs'

export default function Copyrights() {
  return (
    <>
      <div className="w-full h-[1px] bg-[#233B37]" />
      <div className="flex-col mt-[24px]">
        <div className="font-semibold text-[18px] leading-[30px] text-[#233B37] text-center">
          Articular Odonto.
          <br /> Todos os direitos reservados
        </div>
        <div className="flex items-center justify-center gap-[16px] mt-[32px] mb-[40px] text-[#233B37] text-[18px] leading-[30px] font-semibold">
          Desenvolvido por: <GhostSvg />
        </div>
      </div>
    </>
  )
}
