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
    <section
      id="qualidades"
      className="relative bg-gradient-to-b from-[#EEF2F6] to-[#E7ECF2] pt-[96px] pb-[64px] md:pb-[96px]"
    >
      <ArrowDownSvg className="box-content py-[13.5px] px-[11.5px] left-[calc(50%-17.5px)] shadow-[0_0_20px_#24423f26] absolute top-[-16px] bg-[#E1AB56] rounded-[999px]" />

      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start lg:max-w-[1312px] lg:px-[48px] lg:mx-auto">
        <div className="flex flex-col items-center lg:items-start">
          <span className="flex items-center gap-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold mb-[8px] sm:mb-[14px] md:mb-[20px]">
            <CompilingSvg />
            DIFERENCIAIS
          </span>
          <h2 className="text-[#233B37] text-[22px] leading-[30px] font-bold mb-[16px] sm:text-[27px] sm:mb-[20px] md:text-[32px] md:mb-[24px] lg:mb-[56px]">
            Qualidades Articular Odonto
          </h2>
          <span className="text-[#233B37] text-[16px] leading-[24px] font-normal mb-[40px] max-w-[250px] text-center sm:text-[20px] sm:max-w-[307px] sm:leading-[28px] sm:mb-[48px] md:text-[24px] md:max-w-[400px] md:leading-[36px] md:mb-[56px] lg:hidden">
            Descubra o que nos diferencia de outras clínicas em Fortaleza
          </span>
          <div className="w-[318px] sm:w-[400px] md:w-[480px] xl:w-[592px] relative before:absolute before:bg-[#40c8bd66] before:rounded-[4px] before:h-[89.5%] before:w-[91.5%] before:left-[-8px] before:bottom-[-8px] sm:before:left-[-12px] sm:before:bottom-[-12px] md:before:left-[-16px] md:before:bottom-[-16px]">
            <Image
              src={RoomImg}
              className="rounded-[4px]"
              alt="room"
              layout="responsive"
            />
          </div>
        </div>

        <div>
          <span className="hidden text-[#233B37] text-[20px] leading-[30px] font-normal max-w-[312px] lg:block lg:mt-[20px]">
            Descubra o que nos diferencia de outras clínicas em Fortaleza
          </span>
          <ul className="flex flex-col gap-[28px] mt-[48px] sm:mt-[70px] md:mt-[76px] lg:mt-[56px]">
            {topics.map(topic => (
              <li
                key={topic.attribute}
                className="flex flex-col gap-[8px] justify-center items-center lg:items-start"
              >
                <div className="flex flex-col items-center gap-[8px] lg:flex-row lg:gap-[16px] lg:mb-[12px]">
                  <div
                    className={`flex items-center justify-center w-[32px] h-[32px] ${topic.backgroundColor} rounded-[4px] md:w-[36px] md:h-[36px]`}
                  >
                    {topic.icon}
                  </div>
                  <h5 className="text-[#36414C] text-[16px] leading-[21px] font-semibold sm:mb-[4px] md:mb-[8px] md:text-[18px] md:leading-[24px] lg:mb-0">
                    {topic.attribute}
                  </h5>
                </div>

                <p className="text-[#667F7B] text-[16px] leading-[24px] font-normal text-center max-w-[327px] md:text-[18px] md:leading-[26px] md:max-w-[360px] lg:text-left">
                  {topic.description}
                </p>
                {topic.border && (
                  <div className="w-[327px] md:w-[416px] lg:w-full xl:w-[416px] h-[1px] mt-[7px] bg-[#233B37] lg:bg-gradient-to-r lg:from-[#233B37] lg:to-[rgba(35, 59, 55, 0)] opacity-50 sm:mt-[13px] md:mt-[19px]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
