import React from 'react';
import { MenuItemData } from '../../data/menuItems';
import * as S from './styles';
import { useCart } from '../../components/contexts/CartContext';    // ← import do contexto

interface Props {
  item: MenuItemData;
  onClick(): void;
  variant: 'even' | 'odd';
}

const MenuItemCard: React.FC<Props> = ({
  item,
  onClick,
  variant,
}) => {
  const { add } = useCart();     // ← hook para adicionar

  return (
    <S.Card variant={variant} onClick={onClick}>
      <S.Image src={item.image} alt={item.title} />
      <S.Title>{item.title}</S.Title>
      <S.Snippet>
        {item.description}
      </S.Snippet>

      <S.AddButton
        onClick={e => {
          e.stopPropagation(); 
          add(item);
        }}
      >
        Adicionar ao carrinho
      </S.AddButton>
    </S.Card>
  );
};

export default MenuItemCard;
