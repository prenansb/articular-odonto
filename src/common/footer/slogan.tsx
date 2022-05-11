import { LogoSvg } from './svgs'

export default function Slogan() {
  return (
    <div className="flex flex-col items-center mb-12 gap-[32px] sm:items-start sm:pl-[48px] sm:gap-6 sm:mb-0 lg:pl-0 lg:gap-4 sm:col-[1]">
      <LogoSvg
        className="cursor-pointer"
        onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
      />
      <span className="max-w-[261px] sm:max-w-[150px] sm:text-left text-center font-medium text-lg leading-7 text-[#667F7B]">
        Uma vida melhor, começa com um belo sorriso!
      </span>
    </div>
  )
}
