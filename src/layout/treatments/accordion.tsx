import { Card } from '.'

type AccordionProps = {
  informations: {
    number: string
    name: string
    description: string
    treatments: (string | null)[]
  }
  state: {
    tabActive: string
    setTabActive: (active: string) => void
  }
}

export default function Accordion({ informations, state }: AccordionProps) {
  const isTabActive = informations.name === state.tabActive

  return (
    <li
      data-aos="fade-right"
      className="flex flex-col items-center w-full md:items-start lg:w-[384px]"
    >
      <button
        onClick={() => state.setTabActive(informations.name)}
        className={`${
          isTabActive ? '' : 'hover:opacity-60'
        } transition flex flex-col gap-[19px] cursor-pointer w-full`}
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
            } transition text-[24px] leading-[36px] font-medium sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[48px]`}
          >
            {informations.name}
          </span>
        </span>
        <span
          className={`${
            isTabActive ? 'bg-[#40C8BD]' : 'bg-[#8F9CA9]'
          } transition h-[1px] w-full`}
        />
      </button>
      <Card informations={informations} isTabActive={isTabActive} />
    </li>
  )
}
