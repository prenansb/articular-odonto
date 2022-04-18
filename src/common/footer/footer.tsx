import { Copyrights, Informations, SiteMap } from '.'

export default function Footer() {
  return (
    <footer className="mt-[80px] px-[24px]">
      <Informations />

      <SiteMap />

      <Copyrights />
    </footer>
  )
}
