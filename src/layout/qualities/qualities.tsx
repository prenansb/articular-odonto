import { ArrowDownSvg } from './svgs'

const topics = [
  {
    attribute: 'Resultados evidentes',
    description:
      'Muitas pessoas estão satisfeitas com os tratamentos e com os resultados obtidos por meio do nosso atendimento.',
  },
  {
    attribute: 'Consultório Moderno',
    description: `Nosso consultório é equipado com as
  melhores instalações técnicas e totalmente estruturado para o seu melhor conforto.`,
  },
  {
    attribute: 'Tratamentos avançados',
    description:
      'Tratamentos modernos e avançados garantem a melhora da saúde bucal e da autoestima.',
  },
]

export default function Qualities() {
  return (
    <section className="relative flex flex-col items-center bg-[#A6AEB8]">
      <button className="flex items-center justify-center px-[12px] py-[14px] absolute top-[-30px] bg-[#6E7D91] rounded-[999px]">
        <ArrowDownSvg />
      </button>

      <span className="text-[#F6F6F8] text-[16px] leading-[24px] font-medium mt-[51px] mb-[8px]">
        DIFERENCIAIS
      </span>
      <h2 className="text-[#F7F7F7] text-[22px] leading-[30px] font-bold  mb-[16px]">
        Qualidades Articular Odonto
      </h2>
      <span className="text-[#F6F6F8] text-[16px] leading-[24px] font-medium  mb-[40px] text-center">
        Descubra o que nos diferencia de outras clínicas em Fortaleza
      </span>

      <div className="w-[327px] h-[220px] bg-[#F6F6F8] rounded-[8px]"></div>

      <div>
        <ul className="flex flex-col gap-[32px] mt-[40px] mb-[61px]">
          {topics.map(topic => (
            <li
              key={topic.attribute}
              className="flex flex-col gap-[8px] justify-center items-center"
            >
              <div className="w-[32px] h-[32px] bg-[#F6F6F8] rounded-[4px]"></div>
              <h5 className="text-[#F7F7F7] text-[16px] leading-[24px] font-semibold">
                {topic.attribute}
              </h5>
              <p className="text-[#F6F6F8] text-[14px] leading-[21px] font-normal text-center max-w-[327px]">
                {topic.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
