import { useRef, useState } from 'react'
import { Card } from '.'

export default function Accordion() {
  const [openCard, setOpenCard] = useState(false)
  const accordionRef = useRef(null)

  function handleOpenCard() {
    const ref = accordionRef.current

    if (openCard) {
      ref.style.maxHeight = '0px'
      setOpenCard(false)
      return
    }

    ref.style.maxHeight = `${accordionRef.current.scrollHeight}px`
    setOpenCard(true)
  }

  return (
    <div className="flex flex-col items-center gap-[32px] md:items-start md:w-full md:px-[48px] xl:px-0 xl:max-w-[384px]">
      <div className="md:w-full">
        <button
          onClick={handleOpenCard}
          className="flex flex-col gap-[23px] cursor-pointer md:w-full mb-[40px] xl:mb-0"
        >
          <span className="flex items-center gap-[18px] md:gap-[30px]">
            <span className="text-[#40C8BD] text-[18px] leading-[27px] font-medium">
              01
            </span>
            <span className="text-[#246B5F] text-[24px] leading-[36px] font-medium md:text-[32px] md:leading-[48px]">
              Clínico geral
            </span>
          </span>
          <span className="w-[327px] h-[1px] bg-[#40C8BD] md:w-full" />
        </button>
        <Card className="xl:hidden" />
      </div>

      <div className="md:w-full">
        <div className="flex items-center gap-[16px] mb-[24px] md:w-full md:gap-[30px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            02
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Periodontia
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9] md:w-full"></div>
        {/* <Card /> */}
      </div>

      <div className="md:w-full">
        <div className="flex items-center gap-[16px] mb-[24px] md:w-full md:gap-[30px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            03
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Implantodontia
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9] md:w-full"></div>
        {/* <Card /> */}
      </div>

      <div className="md:w-full">
        <div className="flex items-center gap-[16px] mb-[24px] md:w-full md:gap-[30px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            04
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Dentística
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9] md:w-full"></div>
        {/* <Card /> */}
      </div>
    </div>
  )
}
