import Car from 'components/Car'
import Logo from 'components/Logo'
import Navigation from 'components/Navigation'
import * as S from './styles'

const NavBar = () => {
  return (
    <S.Container>
      <div>
        <Logo />

        <Navigation />

        <Car />
      </div>
    </S.Container>
  )
}

export default NavBar
