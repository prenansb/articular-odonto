import { InstagramSvg, WhatsappSvg } from './svgs'

const routes = [
  { name: 'Nossos tratamentos', path: '' },
  { name: 'Sobre nós', path: '' },
  { name: 'Depoimentos', path: '' },
  { name: 'Nossa localização', path: '' },
]

const socials = [
  { name: 'Whatsapp', icon: <WhatsappSvg /> },
  { name: 'Instagram', icon: <InstagramSvg /> },
]

export default function SiteMap() {
  return (
    <>
      <div className="border border-[#9ca8b7] " />

      <div className="mt-[24px]">
        <span className="font-semibold text-[18px] leading-[27px] text-[#586474] ">
          Mapa do site:
        </span>
        <ul className="flex flex-col gap-[16px] mt-[16px]">
          {routes.map(route => (
            <li
              className="font-medium text-[16px] leading-[24px] text-[#7c8999]"
              key={route.name}
            >
              {route.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[24px] mb-[32px]">
        <span className="mb-[16px] font-semibold text-[18px] leading-[27px] text-[#586474]">
          Conecte-se conosco:
        </span>
        <ul className="flex items-center gap-[16px] mt-[24px]">
          {socials.map(social => (
            <li
              className="flex justify-center items-center p-[8px] bg-[#515c6b] rounded-[4px]"
              key={social.name}
            >
              {social.icon}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
