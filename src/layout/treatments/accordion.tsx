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
    <div className="flex flex-col items-center gap-[32px]">
      <div>
        <button
          onClick={handleOpenCard}
          className="flex flex-col gap-[23px] cursor-pointer"
        >
          <div className="flex items-center gap-[18px]">
            <span className="text-[#40C8BD] text-[18px] leading-[27px] font-medium">
              01
            </span>
            <span className="text-[#246B5F] text-[24px] leading-[36px] font-medium">
              Clínico geral
            </span>
          </div>
          <div className="mb-[40px] w-[327px] h-[1px] bg-[#40C8BD]" />
        </button>
        <div ref={accordionRef}>
          <Card />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-[16px] mb-[24px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            02
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Periodontia
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9]"></div>
        {/* <Card /> */}
      </div>

      <div>
        <div className="flex items-center gap-[16px] mb-[24px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            03
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Implantodontia
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9]"></div>
        {/* <Card /> */}
      </div>

      <div>
        <div className="flex items-center gap-[16px] mb-[24px]">
          <span className="text-[#8FA9A5] text-[18px] leading-[27px] font-medium">
            04
          </span>
          <span className="text-[#8FA9A5] opacity-80 text-[24px] leading-[36px] font-medium">
            Dentística
          </span>
        </div>
        <div className="w-[327px] h-[1px] bg-[#8F9CA9]"></div>
        {/* <Card /> */}
      </div>
    </div>
  )
}
