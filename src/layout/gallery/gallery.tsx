import { CameraSvg } from './svgs'

export default function Gallery() {
  return (
    <section className="pt-[48px] pb-[80px] bg-gradient-to-b from-[#EEF2F6] to-[#E7ECF2]">
      <div className="flex flex-col items-center">
        <span className="flex items-center gap-[11px] mb-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold">
          <CameraSvg />
          GALERIA
        </span>
        <h2 className="mb-[16px] text-[#233B37] text-[22px] leading-[30px] font-bold text-center">
          Nossos resultados
        </h2>
        <p className="mb-[40px] text-[#667F7B] text-[16px] leading-[24px] font-medium text-center max-w-[220px]">
          Resultados confirmados pelo sorriso de nossos pacientes
        </p>
      </div>
      <div></div>
    </section>
  )
}
