import { Copyrights, Informations } from '.'

export default function Footer() {
  return (
    <footer>
      <div className="w-full h-[1px] bg-[#9ca8b77f]" />

      <div className="px-[24px] xl:max-w-[1216px] xl:mx-auto">
        <Informations />

        <div className="w-full h-[1px] bg-[#9ca8b77f]" />
        <Copyrights />
      </div>
    </footer>
  )
}
