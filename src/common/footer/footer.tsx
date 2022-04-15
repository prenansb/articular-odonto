import { Copyrights, SiteMap, Informations } from '.'

export default function Footer() {
  return (
    <footer className="mt-[64px] px-[24px]">
      <Informations />

      <SiteMap />

      <Copyrights />
    </footer>
  )
}
