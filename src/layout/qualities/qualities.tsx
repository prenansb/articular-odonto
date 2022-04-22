import Image from 'next/image'
import RoomImg from './imgs/room.png'
import { ArrowDownSvg, ChairSvg, CheckSvg, CompilingSvg, LightningSvg } from './svgs'

const topics = [
  {
    attribute: 'Resultados evidentes',
    description:
      'Muitas pessoas estão satisfeitas com os tratamentos e com os resultados obtidos por meio do nosso atendimento.',
    icon: <CheckSvg />,
    backgroundColor: 'bg-[#87DEAC]',
    border: true,
  },
  {
    attribute: 'Tratamentos avançados',
    description: `Tratamentos modernos e avançados garantem a melhora da saúde bucal e da autoestima.`,
    icon: <LightningSvg />,
    backgroundColor: 'bg-[#FFCF99]',
    border: true,
  },
  {
    attribute: 'Consultório Moderno',
    description:
      'Nosso consultório é equipado com as melhores instalações técnicas e totalmente estruturado para o seu melhor conforto.',
    icon: <ChairSvg />,
    backgroundColor: 'bg-[#80B4FC]',
    border: false,
  },
]

export default function Qualities() {
  return (
    <section className="bg-gradient-to-b from-[#EEF2F6] to-[#E7ECF2]">
      <div className="relative flex flex-col items-center xl:flex-row xl:justify-between xl:items-start xl:max-w-[1216px] xl:mx-auto xl:py-[96px]">
        <div className="px-[12px] py-[14px] absolute top-[-16px] bg-[#E1AB56] rounded-[999px] xl:left-[calc(50%-18px)]">
          <ArrowDownSvg />
        </div>

        <div className="flex flex-col items-center xl:items-start">
          <span className="flex items-center gap-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold mt-[96px] mb-[8px] md:mb-[20px] xl:mt-0">
            <CompilingSvg />
            DIFERENCIAIS
          </span>
          <h2 className="text-[#233B37] text-[22px] leading-[30px] font-bold  mb-[16px] md:text-[32px] md:mb-[24px] xl:mb-[56px]">
            Qualidades Articular Odonto
          </h2>
          <span className="text-[#233B37] text-[16px] leading-[24px] font-normal mb-[40px] max-w-[250px] text-center md:text-[24px] md:max-w-[400px] md:leading-[36px] md:mb-[56px] xl:hidden">
            Descubra o que nos diferencia de outras clínicas em Fortaleza
          </span>
          <div className="w-[318px] md:w-[592px] relative  before:bg-[#40C8BD] before:opacity-40 before:h-[237px] md:before:h-[443px] before:w-[296px] md:before:w-[552px] before:absolute before:rounded-[4px] md:before:rounded-[8px] before:top-[30px] before:right-[30px] md:before:top-[56px] md:before:right-[56px]">
            <Image
              src={RoomImg}
              className="rounded-[4px]"
              alt="room"
              unoptimized
              layout="responsive"
            />
          </div>
        </div>

        <div className="xl:flex xl:flex-col">
          <span className="hidden text-[#233B37] text-[16px] leading-[24px] font-normal mb-[56px] max-w-[250px] xl:block xl:mb-0 xl:mt-[20px]">
            Descubra o que nos diferencia de outras clínicas em Fortaleza
          </span>
          <ul className="flex flex-col gap-[32px] mt-[48px] mb-[64px] md:mt-[76px] xl:mt-[56px] xl:mb-0">
            {topics.map(topic => (
              <li
                key={topic.attribute}
                className="flex flex-col gap-[8px] justify-center items-center xl:mt-0 xl:items-start"
              >
                <div className="flex flex-col items-center gap-[8px] xl:flex-row xl:gap-[16px]">
                  <div
                    className={`flex items-center justify-center w-[32px] h-[32px] ${topic.backgroundColor} rounded-[4px]`}
                  >
                    {topic.icon}
                  </div>
                  <h5 className="text-[#36414C] text-[16px] leading-[21px] font-semibold md:mb-[8px] xl:mb-0">
                    {topic.attribute}
                  </h5>
                </div>

                <p className="text-[#667F7B] text-[16px] leading-[24px] font-normal text-center max-w-[327px] xl:text-left">
                  {topic.description}
                </p>
                {topic.border && (
                  <div className="w-full h-[1px] mt-[7px] bg-gradient-to-r from-[#233B37] to-[rgba(35, 59, 55, 0)] opacity-50 md:mt-[23px] xl:w-[416px]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
