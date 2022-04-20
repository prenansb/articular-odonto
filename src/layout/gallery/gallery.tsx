import { CameraSvg } from './svgs'

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-[#EEF2F6] to-[#E7ECF2]">
      <div className="pt-[48px] pb-[80px] md:py-[96px]">
        <div className="flex flex-col items-center mb-[40px] md:mb-[56px]">
          <span className="flex items-center gap-[10px] mb-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold xl:mb-[16px]">
            <CameraSvg />
            GALERIA
          </span>
          <h2 className="mb-[16px] text-[#233B37] text-[22px] leading-[30px] font-bold text-center md:text-[32px] md:leading-[48px] xl:mb-[8px]">
            Nossos resultados
          </h2>
          <p className="text-[#667F7B] text-[16px] leading-[24px] font-medium text-center max-w-[220px] md:text-[20px] md:leading-[30px] md:max-w-[275px] xl:max-w-[550px]">
            Resultados confirmados pelo sorriso de nossos pacientes
          </p>
        </div>
        <div></div>
      </div>
    </section>
  )
}
