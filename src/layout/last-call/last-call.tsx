import Image from 'next/image'
import BannerImg from './imgs/banner.png'
import { WhatsappSvg } from './svgs'

export default function LastCall() {
  return (
    <div className="flex flex-col items-center h-[531px] relative">
      <div className="absolute">
        <Image src={BannerImg} alt="" unoptimized />
      </div>
      <div className="flex flex-col items-center z-10">
        <h2 className="max-w-[242px] text-[24px] text-[#F7F7F7] font-bold leading-[36px] text-center mt-[48px] mb-[16px] md:text-[40px] md:leading-[60px] md:max-w-[403px]">
          Estamos juntos para fazer você sorrir!
        </h2>
        <p className="max-w-[267px] text-[16px] text-[#F6F6F8] font-medium leading-[24px] text-center mb-[32px] md:text-[18px] md:leading-[27px] md:max-w-[301px]">
          Agende sua consulta conosco, temos o maior prazer em te receber
        </p>
        <a
          href="#"
          className="text-[14px] text-[#54B6AE] font-medium leading-[24px] flex items-center justify-center gap-[20px] bg-[#F6F6F8] rounded-[4px] py-[14px] px-[32px] mb-[56px]"
        >
          <WhatsappSvg />
          Agende sua consulta
        </a>
      </div>
    </div>
  )
}
