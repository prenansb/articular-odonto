import { GhostSvg } from '../svgs'

export default function Copyrights() {
  return (
    <>
      <div className="border border-[#9ca8b7] " />
      <div className="flex-col mt-[24px]">
        <div className="font-semibold text-[18px] leading-[27px] text-[#475567] text-center">
          Articular Odonto.
          <br /> Todos os direitos reservados
        </div>
        <div className="flex flex-col items-center justify-center gap-[8px] mt-[32px] mb-[40px] text-[#586474] text-[18px] leading-[27px] font-semibold">
          Desenvolvido por: <GhostSvg />
        </div>
      </div>
    </>
  )
}
