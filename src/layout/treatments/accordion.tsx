import { useRef, useState } from 'react'
import { Card } from '.'

type AccordionProps = {
  informations: {
    number: string
    name: string
  }
  state: {
    tabActive: string
    setTabActive: (active: string) => void
  }
}

export default function Accordion({ informations, state }: AccordionProps) {
  const [openCard, setOpenCard] = useState(false)
  const accordionRef = useRef(null)

  // function handleOpenCard() {
  //   const ref = accordionRef.current

  //   if (openCard) {
  //     ref.style.maxHeight = '0px'
  //     setOpenCard(false)
  //     return
  //   }

  //   ref.style.maxHeight = `${ref.scrollHeight}px`
  //   setOpenCard(true)
  // }

  const isTabActive = informations.name === state.tabActive

  return (
    <div className="flex flex-col items-center gap-[32px] md:items-start md:w-full md:px-[48px] xl:px-0 xl:max-w-[384px]">
      <div className="md:w-full">
        <button
          onClick={() => state.setTabActive(informations.name)}
          className={`${
            isTabActive ? '' : 'hover:opacity-60'
          }  transition flex flex-col gap-[19px] cursor-pointer md:w-full mb-[24px] xl:mb-0`}
        >
          <span className="flex items-center gap-[18px] md:gap-[30px]">
            <span
              className={`${
                isTabActive ? 'text-[#40C8BD]' : 'text-[#8FA9A5]'
              } transition text-[18px] leading-[27px] font-medium`}
            >
              {informations.number}
            </span>
            <span
              className={`${
                isTabActive ? 'text-[#246B5F]' : 'text-[#8FA9A5]'
              } transition text-[24px] leading-[36px] font-medium md:text-[32px] md:leading-[48px]`}
            >
              {informations.name}
            </span>
          </span>
          <span
            className={`${
              isTabActive ? 'bg-[#40C8BD]' : 'bg-[#8F9CA9]'
            } transition w-[327px] h-[1px]  md:w-full`}
          />
        </button>
        <Card className="xl:hidden" />
      </div>
    </div>
  )
}
