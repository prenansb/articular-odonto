import { useEffect, useState } from 'react'
import Sheet from 'react-modal-sheet'
import { WhatsappSvg } from './svgs'

export default function PopUp() {
  const [isOpen, setOpen] = useState(false)
  const [snapPoints, setSnapPoints] = useState<number[]>([])

  useEffect(() => {
    if (screen.width <= 425) {
      setSnapPoints([110, 0])
      setTimeout(() => {
        setOpen(true)
      }, 10000)
      if (screen.width === 320) {
        setSnapPoints([100, 0])
      }
    }
  }, [])

  return (
    <>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={snapPoints}>
        <Sheet.Container
          onViewportBoxUpdate={() => {
            /* TODO document why this arrow function is empty */
          }}
        >
          <Sheet.Header
            onViewportBoxUpdate={() => {
              /* TODO document why this arrow function is empty */
            }}
          />
          <Sheet.Content
            onViewportBoxUpdate={() => {
              /* TODO document why this arrow function is empty */
            }}
          >
            <div className="w-full px-6 flex items-center gap-8 xsm:gap-[34px] justify-center">
              <div>
                <h6 className="text-sm text-[#36414C] leading-[18px] font-semibold">
                  Dúvidas?
                </h6>
                <span className="text-xs text-[#66737F] leading-[18px] font-medium">
                  Fale conosco
                </span>
              </div>
              <a
                href="#"
                draggable="false"
                className="flex items-center justify-center gap-[16px] xsm:py-[10px] xsm:px-[14px] px-[23px] py-[16px] xsm:text-[10px] bg-[#54B6AE] hover:brightness-95 active:brightness-90 transition text-[14px] text-[#FFFFFF] font-medium leading-[24px] rounded-[4px]"
              >
                <WhatsappSvg />
                Chamar no whatsapp
              </a>
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop
          onViewportBoxUpdate={() => {
            /* TODO document why this arrow function is empty */
          }}
        />
      </Sheet>
    </>
  )
}
