import { LogoSvg, MenuSvg } from './svgs'

export default function Navbar() {
  return (
    <header className="flex items-center h-[90px] px-[24px] py-[25px]">
      <nav className="flex justify-between items-center w-full">
        <LogoSvg />
        <MenuSvg />
      </nav>
    </header>
  )
}
