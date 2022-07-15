import Image from "next/image"
import { BannerImg, BannerLargeImg, PersonsImg } from "./imgs"
import { WhatsappSvg } from "./svgs"

export default function LastCall() {
  return (
    <div className="max-w-fit mx-auto lg:max-w-[1312px] lg:px-[48px] lg:mt-[120px] relative">
      <div className="px-[30px] pt-[48px] lg:py-[60px] lg:px-[72px] rounded-[16px] h-[510px] sm:h-[560px] md:h-[670px] md:px-[50px] lg:h-auto gradient-1 mb-[80px] relative overflow-hidden">
        <div className="absolute w-full inset-0 lg:hidden">
          <Image
            src={BannerImg}
            alt="Ilustrações de círculos"
            layout="responsive"
          />
        </div>

        <div className="hidden absolute w-[773px] right-0 bottom-0 lg:block">
          <Image
            src={BannerLargeImg}
            alt="Ilustrações de círculos"
            layout="responsive"
          />
        </div>

        <div
          data-aos="fade-right"
          className="flex flex-col items-center lg:items-start relative"
        >
          <h2 className="text-[24px] text-[#F7F7F7] font-bold leading-[36px] text-center mb-[16px] sm:text-[32px] sm:leading-[48px] md:text-[40px] md:leading-[60px] lg:text-left">
            Estamos juntos para <br /> fazer você sorrir!
          </h2>
          <p className="text-[16px] text-[#F6F6F8] font-medium leading-[24px] text-center mb-[32px] lg:mb-[40px] sm:text-[17px] sm:leading-[25px] md:text-[18px] md:leading-[27px] lg:text-left">
            Agende sua consulta conosco, <br /> temos o maior prazer em te
            receber.
          </p>
          <a
            href="https://wa.me/5585988000778"
            draggable="false"
            className="hover:brightness-95 active:brightness-90 transition text-[14px] text-[#54B6AE] font-medium leading-[24px] flex items-center justify-center gap-[20px] bg-[#F6F6F8] rounded-[4px] py-[12px] px-[24px]"
          >
            <WhatsappSvg />
            Agende sua consulta
          </a>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="absolute w-full bottom-0 lg:w-7/12 max-w-[730px] lg:right-[60px]"
      >
        <Image
          src={PersonsImg}
          alt="Duas mulheres sorrindo"
          layout="responsive"
        />
      </div>
    </div>
  )
}
