import NavLink from 'components/NavLink'
import * as S from './styles'

const Navigation = () => {
  return (
    <S.Container className="font-semibold">
      <li>
        <NavLink href="/" activeClass="text-orange-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink href="/shop" activeClass="text-orange-500">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink href="/blog" activeClass="text-orange-500">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink href="/contact" activeClass="text-orange-500">
          Contact
        </NavLink>
      </li>
    </S.Container>
  )
}

export default Navigation
