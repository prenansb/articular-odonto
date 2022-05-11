const links = [
  { name: 'Qualidades', path: 'qualidades' },
  { name: 'Tratamentos', path: 'tratamentos' },
  { name: 'Sobre nós', path: 'sobre' },
  { name: 'Depoimentos', path: 'depoimentos' },
  { name: 'Localização', path: 'local' },
]

export default function Browse() {
  return (
    <div className="flex flex-col gap-6 items-center mb-16 sm:items-start sm:w-full lg:w-fit lg:justify-self-start lg:col-[2]">
      <span className="text-[22px] text-[#233B37] leading-8 font-semibold ">Navegue</span>
      <ul className="flex flex-col gap-8 items-center sm:items-start sm:gap-x-20 sm:flex-wrap sm:max-h-36 lg:gap-6 lg:max-h-fit">
        {links.map(link => (
          <li key={link.name}>
            <a
              href={`#${link.path}`}
              draggable="false"
              className="text-base text-[#667F7B] leading-6 font-medium "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
