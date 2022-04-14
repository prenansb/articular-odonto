import { LogoSvg, WhatsappSvg, InstagramSvg, GhostSvg } from './svgs'

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

export default function Footer() {
  return (
    <footer className="mt-[64px] px-[24px]">
      <div className="border border-[#9ca8b7] " />

      <div className="flex justify-between items-center mt-[24px] mb-[56px]">
        <LogoSvg />
      </div>

      <div>
        <h4 className="font-semibold text-[20px] leading-[27px] text-[#515c6b]">
          Endereço da clínica
        </h4>
        <span className="font-medium text-[16px] leading-[24px] text-[#7c8999]">
          Avenida Humberto Monte - 1440, Fortaleza, Ceará.
        </span>
      </div>

      <div className="mt-[32px] mb-[56px]">
        <h4 className="font-semibold text-[20px] leading-[27px] text-[#515c6b]">
          Telefone para contato
        </h4>
        <span className="font-medium text-[16px] leading-[24px] text-[#7c8999]">
          (85) 9.9999-9999 ou (85) 9.9999-9999{' '}
        </span>
      </div>

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

      <div className="border border-[#9ca8b7] " />

      <div className="flex-col mt-[24px]">
        <div className="font-semibold text-[18px] leading-[27px] text-[#475567] text-center">
          Articular Odonto.
          <br /> Todos os direitos reservados
        </div>
        <div className="flex flex-col items-center justify-center gap-[8px] mt-[32px] mb-[40px] text-[#586474] text-[18px] leading-[27px] font-semibold">
          Desenvolvido por: <GhostSvg />
        </div>
      </div>
    </footer>
  )
}
