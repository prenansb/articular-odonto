const details = [
  {
    title: 'Horários de atendimento',
    description: `Segunda a Sexta: 08h30 às 19h00 
      Sábado: 08h30 às 12h00`,
  },
  {
    title: 'Endereço da clínica',
    description: `Avenida Humberto Monte - 1440, 
    Fortaleza, Ceará.`,
  },
  {
    title: 'Telefone para contato',
    description: `(85) 9.999-9999 ou (85) 9.999-9999 `,
  },
]

export default function Location() {
  return (
    <section className="flex flex-col items-center gap-[32px] py-[64px]">
      <div className="flex flex-col items-center">
        <h4 className="mb-[9px] text-[16px] text-[#7C8999] leading-[24px] font-medium text-center">
          ARTICULAR ODONTO
        </h4>
        <h3 className="mb-[15px] text-[22px] text-[#586474] leading-[30px] font-bold">
          Nossa localização
        </h3>
        <span className="max-w-[196px] text-[16px] text-[#7C8999] leading-[24px] font-medium text-center">
          Estamos pertinho de você, vem conhecer a gente
        </span>
      </div>

      <div className="bg-[#A6AEB8] w-[327px] h-[327px] rounded-[8px]"></div>
      <ul className="flex flex-col items-center gap-[32px]">
        {details.map(detail => (
          <li key={detail.title} className="flex flex-col items-center gap-[8px]">
            <div className="w-[32px] h-[32px] bg-[#A6AEB8] rounded-[2px]"></div>
            <h5 className="text-[20px] text-[#586474] leading-[30px] font-semibold text-center">
              {detail.title}
            </h5>
            <p className="text-[16px] text-[#7C8999] leading-[24px] font-medium text-center">
              {detail.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
