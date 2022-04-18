import Image from 'next/image'
import Appointment from './imgs/appointment.png'
import Costumer from './imgs/costumer.png'
import Dentistry from './imgs/dentistry.png'
import { ContactSvg } from './svgs'

export default function AboutUs() {
  return (
    <section className="flex flex-col items-center pt-[48px] relative ">
      <div className="bg-gradient-to-b from-[#EEF2F6] to-[#E7ECF2] w-full h-[473px] absolute top-0" />
      <div className="flex flex-col items-center mb-[48px] z-10">
        <span className="flex items-center gap-[8px] mb-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold">
          <ContactSvg /> SOBRE NÓS
        </span>
        <h2 className="text-[#233B37] text-[22px] leading-[30px] font-bold text-center max-w-[215px] mb-[24px]">
          Somos especialistas em fazer você sorrir!
        </h2>
        <p className="text-[#667F7B] text-[16px] leading-[24px] font-medium text-center max-w-[326px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. i tincidunt et varius
          eget in. Facilisis eget turpis sit sit tortor, orci. Integer proin urna ipsum
          cras. Aliquam morbi enim, et natoque. Vivamus enim maecenas semper congue in.
        </p>
      </div>
      <div className="flex items-center gap-[11px]">
        <div>
          <Image src={Costumer} alt="" unoptimized />
        </div>
        <div className="h-[187px]">
          <Image src={Dentistry} alt="" unoptimized />
        </div>
        <div>
          <Image src={Appointment} alt="" unoptimized />
        </div>
      </div>
    </section>
  )
}
