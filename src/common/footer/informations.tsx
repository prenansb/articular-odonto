import { LogoSvg } from './svgs'

export default function Informations() {
  return (
    <>
      <div className="w-full h-[1px] bg-[#233B37]" />

      <div className="flex flex-col items-start gap-[32px] mt-[24px] mb-[56px]">
        <LogoSvg />
        <span className="max-w-[147px] font-medium text-[18px] leading-[27px] text-[#667F7B]">
          Uma vida melhor, começa com um belo sorriso!
        </span>
      </div>

      <div>
        <h4 className="font-semibold text-[20px] leading-[27px] text-[#36414C]">
          Endereço da clínica
        </h4>
        <span className="font-medium text-[16px] leading-[24px] text-[#667F7B]">
          Avenida Humberto Monte - 1440, Fortaleza, Ceará.
        </span>
      </div>

      <div className="mt-[32px] mb-[56px]">
        <h4 className="font-semibold text-[20px] leading-[27px] text-[#36414C]">
          Telefone para contato
        </h4>
        <span className="font-medium text-[16px] leading-[24px] text-[#667F7B]">
          (85) 9.9999-9999 ou (85) 9.9999-9999{' '}
        </span>
      </div>
    </>
  )
}
