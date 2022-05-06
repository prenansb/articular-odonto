import { useCallback, useEffect, useRef } from 'react'
import { CheckSvg, WaitingSvg, WhatsappSvg } from './svgs'

type CardProps = {
  isTabActive: boolean
  isDesktop?: boolean
  informations: {
    number: string
    name: string
    description: string
    treatments: (string | null)[]
  }
}

export default function Card({ informations, isTabActive, isDesktop }: CardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const setCardHeight = useCallback(() => {
    if (!wrapperRef.current || !itemRef.current) return

    if (isTabActive) {
      wrapperRef.current.style.maxHeight = `${itemRef.current.scrollHeight + 40}px`
      return
    }

    wrapperRef.current.style.maxHeight = '0px'
  }, [isTabActive])

  useEffect(() => {
    setCardHeight()
    window.addEventListener('resize', setCardHeight)

    return () => {
      window.removeEventListener('resize', setCardHeight)
    }
  }, [isTabActive, setCardHeight])

  return (
    <div
      ref={wrapperRef}
      className={`${isTabActive ? 'block' : 'hidden'} ${
        isDesktop ? 'hidden lg:block' : 'lg:hidden'
      } max-h-0 overflow-y-hidden transition-[max-height] duration-300`}
    >
      <div
        ref={itemRef}
        className="mt-[40px] p-[24px] rounded-[8px] bg-[#E7ECF2] lg:p-[32px]"
      >
        <h5 className="mb-[8px] text-[#233B37] text-[24px] leading-[36px] font-medium sm:text-[28px] sm:leading-[42px] md:text-[32px] md:leading-[48px]">
          {informations.name}
        </h5>
        <p className="max-w-[279px] mb-[32px] text-[#667F7B] text-[14px] leading-[21px] font-normal sm:text-[15px] sm:leading-[22.5px] sm:max-w-[367.5px] md:text-[16px] md:leading-[24px] md:max-w-[456px]">
          {informations.description}
        </p>
        <div className="sm:w-[420px] py-[8px] px-[16px] mb-[32px] bg-gradient-to-r from-[#E1AB56] to-[rgba(225, 171, 86, 0)] text-[#F6F6F8] text-[18px] leading-[21px] font-semibold">
          Tratamentos
        </div>
        <ul className="flex flex-col gap-[21px] mb-[56px]">
          {informations.treatments.map(treatment => (
            <li
              key={treatment}
              className="flex items-center gap-[8px] text-[#246B5F] text-[16px] leading-[24px] font-semibold md:text-[18px] md:leading-[21px]"
            >
              {treatment !== null ? (
                <>
                  <CheckSvg />
                  {treatment}
                </>
              ) : (
                <>
                  <WaitingSvg />{' '}
                  <span className="text-[#66737f7f] text-[18px] leading-[21px] font-semibold">
                    Em breve mais tratamentos
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
        <a
          href="#"
          draggable="false"
          className="hover:brightness-95 active:brightness-90 transition flex items-center justify-center gap-[16px] self-center w-full bg-[#54B6AE] rounded-[4px] py-[14px] px-[32px] text-[14px] text-[#FFFFFF] font-medium leading-[21px]"
        >
          <WhatsappSvg />
          Agende sua consulta
        </a>
      </div>
    </div>
  )
}
