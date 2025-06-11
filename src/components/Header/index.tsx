import * as S from './Styles';
import heroImg from '../../assets/Fundo.png';
import LogoImg from '../../assets/logo.png';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const { items, toggleSidebar } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <S.HeaderContainer className='container'>
      <S.Background bg={heroImg} />
      <S.HeaderContent>

      <S.Title>Restaurantes</S.Title>

      <S.LogoLink to="/">
        <S.Logo src={LogoImg} alt="Home" />
      </S.LogoLink>

      <S.CartButton onClick={toggleSidebar}>
        {cartCount} produto{cartCount !== 1 && 's'} no carrinho
      </S.CartButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
