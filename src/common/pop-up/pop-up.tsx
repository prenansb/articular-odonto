import { TouchEvent, useEffect, useRef } from 'react'
import { WhatsappSvg } from './svgs'

export default function PopUp() {
  const popUpRef = useRef<HTMLDivElement>(null)
  const translateRef = useRef({ start: 0, actual: 0, end: 0 })

  function showPopUpOnScroll() {
    const ref = popUpRef.current

    if (!ref) return

    const heightInPixelsToShowPopUp = 460

    window.scrollY >= heightInPixelsToShowPopUp
      ? ref.classList.add('showPopUp')
      : ref.classList.remove('showPopUp')
  }

  useEffect(() => {
    window.addEventListener('scroll', showPopUpOnScroll)

    return () => {
      window.removeEventListener('scroll', showPopUpOnScroll)
    }
  }, [])

  function getHeightDislocation(event: TouchEvent) {
    const clientY = event.targetTouches[0].clientY
    const windowHeight = window.innerHeight
    return windowHeight - clientY
  }

  function handlePopUpStart(event: TouchEvent) {
    translateRef.current.start = getHeightDislocation(event)

    if (!popUpRef.current) return

    popUpRef.current.style.transitionDuration = '0ms'
  }

  function handlePopUpMove(event: TouchEvent) {
    const heightDislocation = getHeightDislocation(event)
    const translateHeight = translateRef.current.start - heightDislocation
    const translateActual = translateRef.current.end + translateHeight

    const transformHeight = () => {
      if (translateActual < 0) return 0
      if (translateActual > 94) return 94
      return translateActual
    }

    translateRef.current.actual = transformHeight()

    if (!popUpRef.current) return

    popUpRef.current.style.transform = `translateY(${translateRef.current.actual}px)` // 0px to 94px
  }

  function handlePopUpEnd() {
    const containerHeightHalf = 94 / 2
    const newTransform = translateRef.current.actual < containerHeightHalf ? 0 : 94

    translateRef.current.end = newTransform

    if (!popUpRef.current) return

    popUpRef.current.style.transform = `translateY(${translateRef.current.end}px)`
    popUpRef.current.style.transitionDuration = '200ms'
  }

  return (
    <div
      ref={popUpRef}
      className="sm:invisible touch-none fixed will-change-transform bg-[#EAEFF4] transition ease-out shadow-[0_-2px_12px_#0000001e] pb-4 pt-6 rounded-t-2xl bottom-0 z-10 w-full px-6 invisible flex items-center gap-8 justify-center"
    >
      <div
        onTouchStart={handlePopUpStart}
        onTouchMove={handlePopUpMove}
        onTouchEnd={handlePopUpEnd}
        className="absolute top-[-15px] w-full h-[39px]"
      />
      <div className="absolute top-2.5 w-10 h-1 bg-[#D5DDE5] rounded-full" />
      <div className="flex flex-col gap-2">
        <h6 className="text-sm text-[#36414C] leading-[18px] font-semibold">Dúvidas?</h6>
        <span className="text-xs text-[#66737F] leading-[18px] font-medium">
          Fale conosco
        </span>
      </div>
      <a
        href="#"
        draggable="false"
        className="flex items-center justify-center gap-[16px] px-[23px] py-[16px] bg-[#54B6AE] hover:brightness-95 active:brightness-90 transition text-[14px] text-[#FFFFFF] font-medium leading-[24px] rounded-[4px]"
      >
        <WhatsappSvg />
        Chamar no whatsapp
      </a>
    </div>
  )
}
