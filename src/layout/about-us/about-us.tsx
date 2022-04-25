import Image from 'next/image'
import Appointment from './imgs/appointment.jpg'
import Costumer from './imgs/costumer.jpg'
import Dentistry from './imgs/dentistry.jpg'
import { ContactSvg } from './svgs'

export default function AboutUs() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center pt-[48px] md:pt-[96px] relative "
    >
      <div className="bg-gradient-to-b from-[#EEF2F6] to-[#E7ECF2] w-full h-[473px] md:h-[690px] xl:h-[739px] absolute top-0" />
      <div className="flex flex-col items-center mb-[48px] z-10 md:mb-[55px] xl:mb-[40px]">
        <span className="flex items-center gap-[8px] mb-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold xl:mb-[16px]">
          <ContactSvg /> SOBRE NÓS
        </span>
        <h2 className="text-[#233B37] text-[22px] leading-[30px] font-bold text-center max-w-[215px] mb-[24px] md:text-[32px] md:leading-[48px] md:max-w-[650px] xl:mb-[16px]">
          Somos especialistas em fazer você sorrir!
        </h2>
        <p className="text-[#667F7B] text-[16px] leading-[24px] font-medium text-center max-w-[326px] md:text-[22px] md:leading-[33px] md:max-w-[672px] xl:max-w-[846px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. i tincidunt et varius
          eget in. Facilisis eget turpis sit sit tortor, orci. Integer proin urna ipsum
          cras. Aliquam morbi enim, et natoque. Vivamus enim maecenas semper congue in.
        </p>
      </div>
      <div className="flex items-center gap-[11px]">
        <div className="w-[90px] md:w-[186px] xl:w-[280px]">
          <Image
            src={Costumer}
            className="rounded-[6px] md:rounded-[10px] xl:rounded-[16px]"
            alt=""
            unoptimized
            layout="responsive"
          />
        </div>
        <div className="w-[124px] md:w-[256px] xl:w-[384px] ">
          <Image
            src={Dentistry}
            className="rounded-[6px] md:rounded-[10px] xl:rounded-[16px]"
            alt=""
            unoptimized
            layout="responsive"
          />
        </div>
        <div className="w-[90px] md:w-[186px] xl:w-[280px]">
          <Image
            src={Appointment}
            className="rounded-[6px] md:rounded-[10px] xl:rounded-[16px]"
            alt=""
            unoptimized
            layout="responsive"
          />
        </div>
      </div>
    </section>
  )
}
