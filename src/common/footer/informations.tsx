import { InstagramSvg, LogoSvg, WhatsappSvg } from './svgs'

const socials = [
  { name: 'Whatsapp', icon: <WhatsappSvg />, link: '#' },
  {
    name: 'Instagram',
    icon: <InstagramSvg />,
    link: 'https://www.instagram.com/articularodonto/?hl=pt-br',
  },
]

export default function Informations() {
  return (
    <div className="md:flex md:justify-between md:mt-[48px] xl:mb-[96px]">
      <div className="">
        <div className="flex flex-col items-start gap-[32px] mt-[32px] mb-[48px] xl:mb-0 md:mt-0">
          <LogoSvg
            className="cursor-pointer"
            onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
          />
          <span className="max-w-[150px] font-medium text-[18px] leading-[27px] text-[#667F7B]">
            Uma vida melhor, começa com um belo sorriso!
          </span>
        </div>
      </div>

      <div className="xl:flex xl:gap-[200px]">
        <div>
          <span className="hidden md:block md:mb-[24px] text-[24px] text-[#233B37] leading-[27px] font-semibold">
            Informações para contato
          </span>
          <div>
            <h4 className="mb-[8px] font-medium text-[20px] leading-[27px] text-[#36414C]">
              Endereço da clínica
            </h4>
            <span className="md:max-w-[320px] font-medium text-[16px] leading-[24px] text-[#667F7B]">
              <a
                href="https://goo.gl/maps/wpJ3HSvbTECPLTgQA"
                target="_blank"
                rel="noreferrer noopener"
              >
                Avenida Humberto Monte - 1440, Fortaleza, Ceará.
              </a>
            </span>
          </div>

          <div className="mt-[32px] mb-[56px] xl:mb-0">
            <h4 className="mb-[8px] font-medium text-[20px] leading-[27px] text-[#36414C]">
              Telefone para contato
            </h4>
            <span className="font-medium text-[16px] leading-[24px] text-[#667F7B]">
              <a href="tel:+55-85-3482-6566" target="_self" rel="noreferrer noopener">
                +55 85 9 9999-9999
              </a>{' '}
              ou{' '}
              <a href="tel:+55-85-3482-6566" target="_self" rel="noreferrer noopener">
                +55 85 9 9999-9999
              </a>
            </span>
          </div>
        </div>

        <div className="mb-[48px] xl:mb-0">
          <span className="mb-[16px] font-semibold text-[24px] leading-[27px] text-[#233B37]">
            Conecte-se conosco:
          </span>
          <ul className="flex items-center gap-[24px] mt-[24px]">
            {socials.map(social => (
              <li key={social.name}>
                <a href={social.link} target="_blank" rel="noreferrer noopener">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
