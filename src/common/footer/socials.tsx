import { InstagramSvg, WhatsappSvg } from './svgs'

interface SocialsProps {
  className: string
}

const socials = [
  { name: 'Whatsapp', icon: <WhatsappSvg />, link: '#' },
  {
    name: 'Instagram',
    icon: <InstagramSvg />,
    link: 'https://www.instagram.com/articularodonto/?hl=pt-br',
  },
]

export default function Socials({ className }: SocialsProps) {
  return (
    <div
      className={`flex flex-col items-center mt-12 gap-6 mb-[88px] sm:mt-0 sm:items-start sm:w-full lg:mt-0 ${className}`}
    >
      <span className="font-semibold text-2xl leading-7 text-[#233B37]">
        Conecte-se conosco
      </span>
      <ul className="flex items-center gap-7">
        {socials.map(social => (
          <li key={social.name}>
            <a href={social.link} target="_blank" rel="noreferrer noopener">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
