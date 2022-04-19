import Image from 'next/image'
import PersonImg from './imgs/person.png'
import { ArmchairSvg, CompassSvg, HeartSvg, PeopleSvg, WhatsappSvg } from './svgs'

const qualities = [
  { title: 'Ambiente confortável', icon: <ArmchairSvg /> },
  { title: 'Profissionais experientes', icon: <PeopleSvg /> },
  { title: 'Consultório bem localizado', icon: <CompassSvg /> },
]

export default function Home() {
  return (
    <section className="flex flex-col items-center xl:flex-row xl:justify-between xl:max-w-[1216px] xl:mx-auto">
      <div className="flex flex-col items-center mb-[56px] mt-[40px] md:mb-[96px] xl:items-start xl:mt-[80px]">
        <span className="flex items-center gap-[8px] mb-[16px] text-[14px] text-[#81540E] font-semibold leading-[18px] text-center">
          <HeartSvg />
          ESTAMOS AQUI POR VOCÊ
        </span>
        <h1 className="max-w-[280px] mb-[8px] text-[32px] text-[#233B37] font-bold leading-[48px] text-center md:text-[48px] md:leading-[64px] md:max-w-[405px] md:mb-[24px] xl:text-left xl:mb-[24px]">
          Uma vida melhor, começa com um belo sorriso!
        </h1>
        <p className="text-[14px] text-[#667F7B] font-normal leading-[21px] text-center max-w-[287px] mb-[32px] md:text-[18px] md:leading-[24px] md:max-w-[399px] md:mb-[40px] xl:text-left xl:mb-[40px]">
          Na Articular Odonto você encontra os melhores tratamentos odontológicos e com um
          preço que cabe no seu bolso!
        </p>

        <button className="flex items-center justify-center gap-[10px] bg-[#54B6AE] rounded-[4px] py-[16px] px-[24px] mb-[40px] md:py-[12px] md:mb-[56px] xl:mb-[64px]">
          <WhatsappSvg />
          <a href="#" className="text-[14px] text-[#FFFFFF] font-medium leading-[24px]">
            Agende sua consulta
          </a>
        </button>

        <ul className="flex flex-col justify-center items-start gap-[24px]">
          {qualities.map(quality => (
            <li
              key={quality.title}
              className="flex items-center gap-[16px] text-[#81540E] text-[14px] font-medium leading-[18px] md:text-[16px]"
            >
              {quality.icon}
              {quality.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-[96px] h-[426px]">
        <Image src={PersonImg} alt="person smiling" priority unoptimized />
      </div>
    </section>
  )
}
