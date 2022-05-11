import { HeartSvg } from './svgs'

interface CopyrightsProps {
  className: string
}

export default function Copyrights({ className }: CopyrightsProps) {
  return (
    <div
      className={`flex flex-col items-center w-full relative pt-10 lg:flex-row lg:justify-between ${className}`}
    >
      <div className="absolute top-0 h-[1px] w-[calc(100%-48px)] sm:w-[calc(100%-96px)] lg:w-full bg-[#9CA8B7] opacity-50 " />

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
