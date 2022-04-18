import Image from 'next/image'
import BannerImg from './imgs/banner.png'
import { WhatsappSvg } from './svgs'

export default function LastCall() {
  return (
    <div className="flex flex-col items-center h-[531px] relative mt-[16px]">
      <div className="absolute">
        <Image src={BannerImg} alt="" unoptimized />
      </div>
      <div className="flex flex-col items-center z-10">
        <h2 className="max-w-[222px] text-[22px] text-[#F7F7F7] font-bold leading-[30px] text-center mt-[48px] mb-[16px]">
          Estamos juntos para fazer você sorrir!
        </h2>
        <p className="max-w-[267px] text-[16px] text-[#F6F6F8] font-medium leading-[24px] text-center mb-[32px]">
          Agende sua consulta conosco, temos o maior prazer em te receber
        </p>
        <button className="flex items-center justify-center gap-[20px] bg-[#F6F6F8] rounded-[4px] py-[14px] px-[32px] mb-[56px]">
          <WhatsappSvg />
          <a href="#" className="text-[14px] text-[#54B6AE] font-medium leading-[24px]">
            Agende sua consulta
          </a>
        </button>
      </div>
    </div>
  )
}
