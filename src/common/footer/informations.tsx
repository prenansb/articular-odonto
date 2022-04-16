import { LogoSvg } from './svgs'

export default function Informations() {
  return (
    <>
      <div className="border border-[#9ca8b7] " />

      <div className="flex justify-between items-center mt-[24px] mb-[56px]">
        <LogoSvg />
      </div>

      <div>
        <h4 className="font-semibold text-[20px] leading-[27px] text-[#515c6b]">
          Endereço da clínica
        </h4>
        <span className="font-medium text-[16px] leading-[24px] text-[#7c8999]">
          Avenida Humberto Monte - 1440, Fortaleza, Ceará.
        </span>
      </div>

      <div className="mt-[32px] mb-[56px]">
        <h4 className="font-semibold text-[20px] leading-[27px] text-[#515c6b]">
          Telefone para contato
        </h4>
        <span className="font-medium text-[16px] leading-[24px] text-[#7c8999]">
          (85) 9.9999-9999 ou (85) 9.9999-9999{' '}
        </span>
      </div>
    </>
  )
}
