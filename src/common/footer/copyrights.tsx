import { GhostSvg } from './svgs'

export default function Copyrights() {
  return (
    <>
      <div className="flex flex-col mt-[40px] xl:flex-row xl:items-center xl:justify-between xl:mt-[48px] xl:mb-[56px]">
        <div className="font-semibold text-[18px] md:text-[20px] leading-[30px] text-[#233B37] text-center">
          Articular Odonto.
          <br className="md:hidden" /> Todos os direitos reservados
        </div>
        <div className="flex items-center justify-center gap-[16px] my-[32px] text-[#233B37] text-[18px] md:text-[20px] leading-[30px] font-semibold">
          Desenvolvido por: <GhostSvg />
        </div>
      </div>
    </>
  )
}
