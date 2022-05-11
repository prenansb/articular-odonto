import { Browse, Copyrights, Informations, Slogan } from '.'
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="border-t border-[#9ca8b77f]">
      <div className="grid justify-items-center py-8 sm:justify-items-start sm:grid-cols-[auto_2fr] sm:gap-x-[88px] sm:pt-12 sm:pb-9 lg:pb-8 lg:grid-cols-none lg:auto-cols-auto lg:gap-x-0 lg:justify-around lg:max-w-[1312px] lg:mx-auto">
        <Slogan />
        <Browse />
        <Informations />
        <Socials />
        <Copyrights />
      </div>
    </footer>
  )
}
