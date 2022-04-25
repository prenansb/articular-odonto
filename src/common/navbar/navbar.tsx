import { LogoSvg, MenuSvg, WhatsappSvg } from './svgs'

const links = [
  { name: 'Qualidades', path: 'qualidades' },
  { name: 'Tratamentos', path: 'tratamentos' },
  { name: 'Sobre nós', path: 'sobre' },
  { name: 'Depoimentos', path: 'depoimentos' },
  { name: 'Localização', path: 'local' },
]

export default function Navbar() {
  return (
    <header className="flex items-center h-[90px] px-[24px] pt-[18px] md:px-[48px] xl:px-0 xl:max-w-[1216px] xl:mx-auto">
      <nav className="flex justify-between items-center xl:justify-between w-full">
        <LogoSvg />
        <ul className="hidden lg:flex items-center gap-[40px]">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={`#${link.path}`}
                className="text-[#8F9CA9] text-[14px] leading-[24px] font-normal hover:underline hover:text-[#121212]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="hidden xl:flex items-center justify-center gap-[20px] bg-[#F6F6F8] border border-[#54B6AE] rounded-[4px] py-[12px] px-[24px] text-[14px] text-[#54B6AE] font-medium leading-[24px]"
        >
          <WhatsappSvg />
          Agende sua consulta
        </a>
        <MenuSvg className="lg:hidden" />
      </nav>
    </header>
  )
}
