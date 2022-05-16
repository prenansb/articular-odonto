interface TestimonialProps {
  patient: string
  review: string
}

export default function Testimonial({ patient, review }: TestimonialProps) {
  return (
    <div className="swiper-slide max-w-[292px] lg:max-w-[353px]">
      <div className="p-[24px] h-[335px] mb-[32px] flex flex-col items-start justify-between bg-[#DEEDEB] rounded-[8px] md:mb-[48px]">
        <p className="mb-[40px] text-[#667F7B] text-[16px] leading-[24px] font-medium xl:text-[18px] xl:leading-[27px]">
          {review}
        </p>
        <div className="flex flex-col">
          <span className="mb-[4px] text-[#36414C] text-[20px] leading-[30px] font-bold">
            {patient}
          </span>
          <span className="text-[16px] text-[#667F7B] leading-[24px] font-medium">
            Paciente Articular Odonto
          </span>
        </div>
      </div>
    </div>
  )
}
