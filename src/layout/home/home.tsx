import Image from 'next/image'
import HeroBanner from './imgs/hero-banner.png'
import { ArmchairSvg, CompassSvg, HeartSvg, PeopleSvg, WhatsappSvg } from './svgs'

const qualities = [
  { title: 'Ambiente confortável', icon: <ArmchairSvg /> },
  { title: 'Profissionais experientes', icon: <PeopleSvg /> },
  { title: 'Consultório bem localizado', icon: <CompassSvg /> },
]

export default function Home() {
  return (
    <section className="flex flex-col items-center mb-[96px] gap-[56px] sm:gap-[76px] md:gap-[96px] lg:gap-0 lg:flex-row lg:items-start lg:justify-between lg:max-w-[1312px] lg:px-[48px] lg:mx-auto lg:mt-[26px]">
      <div className="flex flex-col items-center mt-[40px] lg:items-start xl:mt-[80px]">
        <span className="flex items-center gap-[8px] mb-[16px] text-[14px] text-[#81540E] font-semibold leading-[18px] text-center">
          <HeartSvg />
          ESTAMOS AQUI POR VOCÊ
        </span>
        <h1 className="mb-[8px] text-[#233B37] font-bold text-center text-[32px] leading-[48px] max-w-[280px] sm:text-[40px] sm:leading-[52px] sm:max-w-[335px] sm:mb-[16px] md:text-[48px] md:leading-[58px] md:max-w-[405px] md:mb-[24px] lg:text-left">
          Uma vida melhor, começa com um belo sorriso!
        </h1>
        <p className="text-[#667F7B] font-normal text-center mb-[32px] text-[14px] leading-[21px] max-w-[287px] sm:text-[16px] sm:leading-[24px] sm:max-w-[318px] sm:mb-[36px] md:text-[18px] md:leading-[29px] md:max-w-[380px] md:mb-[40px] lg:text-left">
          Na Articular Odonto você encontra os melhores tratamentos odontológicos e com um
          preço que cabe no seu bolso!
        </p>

        <a
          href="#"
          draggable="false"
          className="hover:brightness-95 active:brightness-90 transition text-[14px] text-[#FFFFFF] font-medium leading-[24px] flex items-center justify-center gap-[10px] bg-[#54B6AE] rounded-[4px] py-[12px] px-[24px] mb-[40px] sm:py-[14px] sm:mb-[48px] md:mb-[56px] xl:mb-[64px]"
        >
          <WhatsappSvg />
          Agende sua consulta
        </a>

        <ul className="flex flex-col justify-center items-start gap-[24px]">
          {qualities.map(quality => (
            <li
              key={quality.title}
              className="flex items-center gap-[16px] text-[#81540E] text-[14px] font-medium leading-[18px] sm:text-[15px] md:text-[16px]"
            >
              {quality.icon}
              {quality.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[325px] sm:w-[382px] md:w-[438px] xl:w-[540px]">
        <Image
          src={HeroBanner}
          alt="person smiling"
          priority
          unoptimized
          layout="responsive"
        />
      </div>
    </section>
  )
}
