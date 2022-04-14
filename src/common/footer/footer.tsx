import * as S from './footer.styles'
import { LogoSvg, WhatsappSvg, InstagramSvg, GhostSvg } from './svgs'

const routes = [
  { name: 'Nossos tratamentos', path: '' },
  { name: 'Sobre nós', path: '' },
  { name: 'Depoimentos', path: '' },
  { name: 'Nossa localização', path: '' },
]

const socials = [
  { name: 'Whatsapp', icon: <WhatsappSvg /> },
  { name: 'Instagram', icon: <InstagramSvg /> },
]

export default function Footer() {
  return (
    <S.Footer>
      <S.Line />

      <S.Logo>
        <LogoSvg />
      </S.Logo>

      <S.Address>
        <h4>Endereço da clínica</h4>
        <span>Avenida Humberto Monte - 1440, Fortaleza, Ceará.</span>
      </S.Address>

      <S.Contact>
        <h4>Telefone para contato</h4>
        <span>(85) 9.9999-9999 ou (85) 9.9999-9999 </span>
      </S.Contact>

      <S.Line />

      <S.SiteMap>
        <span>Mapa do site:</span>
        <S.Links>
          {routes.map(route => (
            <S.Link key={route.name}>{route.name}</S.Link>
          ))}
        </S.Links>
      </S.SiteMap>
      <S.Social>
        <span>Conecte-se conosco:</span>
        <S.SocialList>
          {socials.map(social => (
            <S.SocialIcon key={social.name}>{social.icon}</S.SocialIcon>
          ))}
        </S.SocialList>
      </S.Social>

      <S.Line />

      <S.Copyrights>
        <S.Rights>
          Articular Odonto.
          <br /> Todos os direitos reservados
        </S.Rights>
        <S.Developed>
          Desenvolvido por: <GhostSvg />
        </S.Developed>
      </S.Copyrights>
    </S.Footer>
  )
}
