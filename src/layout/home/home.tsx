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
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-[8px] mb-[32px] mt-[40px]">
        <span className="flex items-center gap-[8px] text-[14px] text-[#81540E] font-medium leading-[18px] text-center">
          <HeartSvg />
          ESTAMOS AQUI POR VOCÊ
        </span>
        <h1 className="max-w-[280px] text-[32px] text-[#233B37] font-bold leading-[48px] text-center">
          Uma vida melhor, começa com um belo sorriso!
        </h1>
        <p className="text-[14px] text-[#667F7B] font-normal leading-[21px] text-center max-w-[287px]">
          Na Articular Odonto você encontra os melhores tratamentos odontológicos e com um
          preço que cabe no seu bolso!
        </p>
      </div>

      <button className="flex items-center justify-center gap-[20px] bg-[#54B6AE] rounded-[4px] py-[14px] px-[32px] mb-[40px]">
        <WhatsappSvg />
        <a href="#" className="text-[14px] text-[#FFFFFF] font-medium leading-[21px]">
          Agende sua consulta
        </a>
      </button>

      <ul className="flex flex-col justify-center items-start gap-[16px] mb-[60px]">
        {qualities.map(quality => (
          <li
            key={quality.title}
            className="flex items-center gap-[11.5px] text-[#81540E] text-[14px] font-medium leading-[18px]"
          >
            {quality.icon}
            {quality.title}
          </li>
        ))}
      </ul>

      <div className="mb-[96px]">
        <Image src={PersonImg} alt="person smiling" priority unoptimized />
      </div>
    </section>
  )
}
