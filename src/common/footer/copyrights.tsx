import { HeartSvg } from './svgs'

export default function Copyrights() {
  return (
    <div className="flex flex-col items-center w-[calc(100%-48px)] sm:w-[calc(100%-96px)] lg:w-full border-t border-[#9ca8b77f] pt-10 lg:flex-row lg:justify-between sm:col-[1/3] sm:justify-self-center lg:col-[1/5] lg:mt-[22px]">
      <div className="lg:order-2 font-medium text-[18px] leading-[30px] text-[#343a40bf] text-center">
        Articular Odonto.
        <br className="sm:hidden" /> Todos os direitos reservados.
      </div>
      <span className="mt-[30px] lg:mt-0 text-center text-[#233b37bf] text-[18px] leading-[30px] font-semibold">
        Feito com <HeartSvg className="inline" /> por{' '}
        <a href="https://octanestd.com/" target="_blank" rel="noreferrer noopener">
          Octane Studio
        </a>
      </span>
    </div>
  )
}
