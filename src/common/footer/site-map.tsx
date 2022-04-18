import { InstagramSvg, WhatsappSvg } from './svgs'

const socials = [
  { name: 'Whatsapp', icon: <WhatsappSvg /> },
  { name: 'Instagram', icon: <InstagramSvg /> },
]

export default function SiteMap() {
  return (
    <>
      <div className="mt-[24px] mb-[32px]">
        <span className="mb-[16px] font-semibold text-[24px] leading-[27px] text-[#233B37]">
          Conecte-se conosco:
        </span>
        <ul className="flex items-center gap-[16px] mt-[24px]">
          {socials.map(social => (
            <li key={social.name}>{social.icon}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
