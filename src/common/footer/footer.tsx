import { Copyrights, Informations } from '.'

export default function Footer() {
  return (
    <footer className="mt-[80px] px-[24px] xl:max-w-[1216px] xl:mx-auto">
      <div className="w-full h-[1px] bg-[#233B37]" />
      <Informations />

      <div className="w-full h-[1px] bg-[#233B37]" />
      <Copyrights />
    </footer>
  )
}
