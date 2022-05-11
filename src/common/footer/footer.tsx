import { Browse, Copyrights, Informations, Slogan } from '.'
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute top-0 h-[1px] w-full bg-[#9CA8B7] opacity-50 " />

      <div className="grid justify-items-center py-8 sm:justify-items-start sm:grid-cols-[auto_2fr] sm:gap-x-[88px] sm:pt-12 sm:pb-9 lg:pb-8 lg:grid-cols-none lg:auto-cols-auto lg:gap-x-0 lg:justify-around lg:max-w-[1312px] lg:mx-auto">
        <Slogan className="sm:col-[1]" />
        <Browse className="lg:col-[2]" />
        <Informations className="sm:col-[2] lg:col-[3]" />
        <Socials className="sm:col-[2] lg:col-[4]" />
        <Copyrights className="sm:col-[1/3] sm:justify-self-center lg:col-[1/5] lg:mt-[22px]" />
      </div>
    </footer>
  )
}
