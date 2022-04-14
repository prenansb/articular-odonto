import * as S from './navbar.styles'
import { LogoSvg, MenuSvg } from './svgs'

export default function Navbar() {
  return (
    <S.Header>
      <S.Nav>
        <LogoSvg />
        <MenuSvg />
      </S.Nav>
    </S.Header>
  )
}
