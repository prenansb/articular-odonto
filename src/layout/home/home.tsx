import { DiamondSvg, WhatsappSvg } from './svgs'

const qualities = [
  'Ambiente confortável',
  'Profissionais experientes',
  'Consultório bem localizado',
]

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-[8px] mb-[32px] mt-[40px]">
        <span className="text-[14px] text-[#7C8999] font-medium leading-[18px] text-center">
          ESTAMOS AQUI POR VOCÊ
        </span>
        <h1 className="text-[32px] text-[#586474] font-bold leading-[48px] text-center">
          Uma vida melhor, começa com um belo sorriso!
        </h1>
        <p className="text-[14px] text-[#7C8999] font-normal leading-[21px] text-center max-w-[287px]">
          Na Articular Odonto você encontra os melhores tratamentos odontológicos e com um
          preço que cabe no seu bolso!
        </p>
      </div>

      <button className="flex items-center justify-center gap-[20px] bg-[#586474] rounded-[4px] py-[14px] px-[32px] mb-[40px]">
        <WhatsappSvg />
        <a href="#" className="text-[14px] text-[#F6F6F8] font-medium leading-[21px]">
          Agende sua consulta
        </a>
      </button>

      <ul className="flex flex-col justify-center items-start gap-[16px] mb-[60px]">
        {qualities.map(quality => (
          <li
            key={quality}
            className="flex items-center gap-[11.5px] text-[#7C8999] text-[14px] font-medium leading-[18px]"
          >
            <DiamondSvg />
            {quality}
          </li>
        ))}
      </ul>

      <div className="bg-[#A6AEB8] w-[327px] h-[327px] rounded-[8px] mb-[93px]"></div>
    </section>
  )
}
