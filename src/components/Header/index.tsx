import * as S from './styles';
import heroImg from '../../assets/Fundo.png';
import LogoImg from '../../assets/logo.png';
import { useCart } from '../../components/contexts/CartContext';

interface HeaderProps {
  cartCount: number;
}

 export default function Header() {
  const { total, items, toggleSidebar } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <S.HeaderContainer>
      <S.Background bg={heroImg} />
      <S.Title>Restaurantes</S.Title>
     <S.LogoLink to="/">
       <S.Logo src={LogoImg} alt="Home" />
     </S.LogoLink>

     <S.Title onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
       {cartCount} produto(s) no carrinho
     </S.Title>
    </S.HeaderContainer>
  );
}
