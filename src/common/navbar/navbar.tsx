import { useEffect, useState } from 'react'
import { CloseSvg, LogoSvg, MenuSvg, WhatsappSvg } from './svgs'

const links = [
  { name: 'Qualidades', path: 'qualidades' },
  { name: 'Tratamentos', path: 'tratamentos' },
  { name: 'Sobre nós', path: 'sobre' },
  { name: 'Depoimentos', path: 'depoimentos' },
  { name: 'Localização', path: 'local' },
]

function toggleScrollbarVisibility(menuOpen: boolean) {
  if (menuOpen) {
    document.body.style.overflow = 'hidden'
    return
  }
  document.body.style.overflow = ''
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => toggleScrollbarVisibility(open), [open])

  return (
    <header className="flex items-center h-[90px] px-[24px] pt-[18px] md:px-[48px] lg:max-w-[1312px] lg:mx-auto">
      <nav className="flex justify-between items-center w-full">
        <LogoSvg />
        <div
          className={`${
            open
              ? 'flex flex-col fixed inset-0 z-50 h-screen bg-[#F6F7F9] mt-[80px]'
              : 'hidden lg:flex'
          } items-center xl:flex-1`}
        >
          <ul
            className={`${
              open && 'flex flex-col mt-[48px] mb-[64px]'
            } lg:flex items-center gap-[40px] xl:mx-auto`}
          >
            {links.map(link => (
              <li key={link.name}>
                <a
                  href={`#${link.path}`}
                  onClick={() => setOpen(false)}
                  draggable="false"
                  className="text-[#8F9CA9] text-[16px] leading-[24px] font-normal hover:text-[#121212]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5585999114237"
            draggable="false"
            onClick={() => setOpen(false)}
            className={`${
              open
                ? 'flex active:brightness-90 text-[#FFFFFF] bg-[#54B6AE]'
                : 'hidden xl:flex hover:bg-[rgba(84,182,172,0.07)] active:bg-[rgba(84,182,172,0.14)] bg-[#F6F6F8] border border-[#54B6AE] text-[#54B6AE]'
            } transition items-center justify-center gap-[20px] rounded-[4px] py-[12px] px-[24px] text-[14px] font-medium leading-[24px]`}
          >
            <WhatsappSvg className={open ? 'fill-white' : 'fill-[#54B6AE]'} />
            Agende sua consulta
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`${
            open ? 'hidden' : 'block'
          } w-[40px] h-[40px] leading-[0px] lg:hidden`}
        >
          <MenuSvg className="inline" />
        </button>
        <button
          onClick={() => setOpen(false)}
          className={`${
            open ? 'block' : 'hidden'
          } w-[40px] h-[40px] leading-[0px] lg:hidden`}
        >
          <CloseSvg className="inline" />
        </button>
      </nav>
    </header>
  )
}
