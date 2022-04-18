import Image from 'next/image'
import RoomImg from './imgs/room.png'
import { ArrowDownSvg, ChairSvg, CheckSvg, CompilingSvg, LightningSvg } from './svgs'

export default function Qualities() {
  const topics = [
    {
      attribute: 'Resultados evidentes',
      description:
        'Muitas pessoas estão satisfeitas com os tratamentos e com os resultados obtidos por meio do nosso atendimento.',
      icon: <CheckSvg />,
      backgroundColor: 'bg-[#87DEAC]',
    },
    {
      attribute: 'Consultório Moderno',
      description: `Nosso consultório é equipado com as
    melhores instalações técnicas e totalmente estruturado para o seu melhor conforto.`,
      icon: <LightningSvg />,
      backgroundColor: 'bg-[#FFCF99]',
    },
    {
      attribute: 'Tratamentos avançados',
      description:
        'Tratamentos modernos e avançados garantem a melhora da saúde bucal e da autoestima.',
      icon: <ChairSvg />,
      backgroundColor: 'bg-[#80B4FC]',
    },
  ]

  return (
    <section className="relative flex flex-col items-center bg-gradient-to-b from-[#EEF2F6] to-[#E7ECF2] ">
      <button className="flex items-center justify-center px-[12px] py-[14px] absolute top-[-16px] bg-[#E1AB56] rounded-[999px]">
        <ArrowDownSvg />
      </button>

      <span className="flex items-center gap-[8px] text-[#81540E] text-[16px] leading-[24px] font-medium mt-[51px] mb-[8px]">
        <CompilingSvg />
        DIFERENCIAIS
      </span>
      <h2 className="text-[#233B37] text-[22px] leading-[30px] font-bold  mb-[16px]">
        Qualidades Articular Odonto
      </h2>
      <span className="text-[#233B37] text-[16px] leading-[24px] font-medium  mb-[40px] max-w-[250px] text-center">
        Descubra o que nos diferencia de outras clínicas em Fortaleza
      </span>

      <div>
        <Image src={RoomImg} alt="room" unoptimized />
      </div>

      <div>
        <ul className="flex flex-col gap-[32px] mt-[40px] mb-[61px]">
          {topics.map(topic => (
            <li
              key={topic.attribute}
              className="flex flex-col gap-[8px] justify-center items-center"
            >
              <div
                className={`flex items-center justify-center w-[32px] h-[32px] ${topic.backgroundColor} rounded-[4px]`}
              >
                {topic.icon}
              </div>
              <h5 className="text-[#36414C] text-[16px] leading-[24px] font-semibold">
                {topic.attribute}
              </h5>
              <p className="text-[#667F7B] text-[14px] leading-[21px] font-normal text-center max-w-[327px]">
                {topic.description}
              </p>
              <div className="w-full h-[1px] mt-[8px]  bg-[#233B37] opacity-50"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
