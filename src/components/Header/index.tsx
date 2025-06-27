
import * as S from './Styles'
import heroImg from '../../assets/Fundo.png'
import LogoImg from '../../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { openCart } from '../../store/reducers/cart'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'

export default function Header() {
  const dispatch = useDispatch()

  // Seleciona items do slice de Redux
  const items = useSelector((state: RootState) => state.cart.items)

  // Soma quantidades
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <S.HeaderContainer className="container">
      <S.Background bg={heroImg} />
      <S.HeaderContent>
        <S.Title>Restaurantes</S.Title>

        <Link to="/">
          <S.Logo src={LogoImg} alt="Home" />
        </Link>

        <S.CartButton onClick={() => dispatch(openCart())}>
          {cartCount} produto{cartCount !== 1 && 's'} no carrinho
        </S.CartButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
