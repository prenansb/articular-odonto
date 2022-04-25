import { GhostSvg } from './svgs'

export default function Copyrights() {
  return (
    <>
      <div className="flex flex-col mt-[40px] xl:flex-row xl:items-center xl:justify-between xl:my-[0px]">
        <div className="font-medium text-[18px] md:text-[20px] leading-[30px] text-[#343a40bf] text-center">
          Articular Odonto.
          <br className="md:hidden" /> Todos os direitos reservados
        </div>
        <div className="flex items-center justify-center gap-[16px] my-[32px] text-[#233b37bf] text-[18px] md:text-[20px] leading-[30px] font-semibold">
          Desenvolvido por:{' '}
          <a
            href="https://octane-xi.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GhostSvg />
          </a>
        </div>
      </div>
    </>
  )
}
