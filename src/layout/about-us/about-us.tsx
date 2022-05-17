import Image from 'next/image'
import Appointment from './imgs/appointment.jpg'
import Costumer from './imgs/costumer.jpg'
import Dentistry from './imgs/dentistry.jpg'
import { ContactSvg } from './svgs'

export default function AboutUs() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center pt-[48px] pb-[161px] mb-[75px] lg:mb-[106px] lg:pb-[380px] md:pt-[96px] md:pb-[290px] bg-gradient-to-b from-[#EEF2F6] to-[#E7ECF2] relative"
    >
      <span className="flex items-center gap-[8px] mb-[8px] text-[#81540E] text-[14px] leading-[18px] font-semibold lg:mb-[16px]">
        <ContactSvg /> SOBRE NÓS
      </span>
      <h2
        data-aos="fade-up"
        className="text-[#233B37] text-[22px] leading-[30px] font-bold text-center mb-[24px] sm:text-[27px] sm:leading-[39px] md:text-[32px] md:leading-[48px] lg:mb-[16px]"
      >
        Somos especialistas <br className="lg:hidden" /> em fazer você sorrir!
      </h2>
      <p
        data-aos="fade-left"
        data-aos-delay="100"
        className="text-[#667F7B] text-[14px] leading-[22px] font-medium text-center max-w-[326px] sm:text-[17px] sm:leading-[27px] sm:max-w-[500px] md:text-[20px] md:leading-[30px] md:max-w-[600px] lg:max-w-[846px]"
      >
        Sendo o setor da saúde bucal, consideramos nosso dever essencial garantir a
        segurança de nossos pacientes, eficácia de nossos tratamentos, transparência em
        nossas práticas e atendimento em tempo hábil e seguro acima de tudo!
      </p>
      <div className="absolute bottom-[19px] translate-y-1/2 md:bottom-0 md:translate-y-1/4">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center gap-[11px] md:gap-[21px]"
        >
          <div className="w-[90px] md:w-[150px] lg:w-[220px]">
            <Image
              src={Costumer}
              className="rounded-[6px] md:rounded-[10px] lg:rounded-[16px]"
              alt="Foto de um homem sorrindo no dentista"
              layout="responsive"
            />
          </div>
          <div className="w-[124px] md:w-[200px] lg:w-[280px]">
            <Image
              src={Dentistry}
              className="rounded-[6px] md:rounded-[10px] lg:rounded-[16px]"
              alt="Foto de mulher usando mascará em um consultório"
              layout="responsive"
            />
          </div>
          <div className="w-[90px] md:w-[150px] lg:w-[220px]">
            <Image
              src={Appointment}
              className="rounded-[6px] md:rounded-[10px] lg:rounded-[16px]"
              alt="Foto de uma mulher sorrindo no dentista"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
