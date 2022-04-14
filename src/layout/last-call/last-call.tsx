import { WhatsappSvg } from './svgs'

export default function LastCall() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#A6AEB8] mt-[10px]">
      <h2 className="max-w-[222px] text-[22px] text-[#F7F7F7] font-bold leading-[30px] text-center mt-[48px] mb-[16px]">
        Estamos juntos para fazer você sorrir!
      </h2>
      <p className="max-w-[264px] text-[16px] text-[#F6F6F8] font-medium leading-[24px] text-center mb-[32px]">
        Agende sua consulta conosco, temos o maior prazer em te receber
      </p>
      <button className="flex items-center justify-center gap-[20px] bg-[#586474] rounded-[4px] py-[14px] px-[32px] mb-[56px]">
        <WhatsappSvg />
        <a href="#" className="text-[14px] text-[#F6F6F8] font-medium leading-[21px]">
          Agende sua consulta
        </a>
      </button>

      <div className="bg-[#F6F6F8] w-[327px] h-[327px] rounded-[8px] mb-[56px]"></div>
    </div>
  )
}
