
import React from 'react';
import { MenuItemData } from '../../data/menuItems';
import * as S from './styles';

interface Props {
  item: MenuItemData;
  onClick(): void;
  variant: 'even' | 'odd';
}

const MenuItemCard: React.FC<Props> = ({
  item,
  onClick,
  variant,
}) => (
  <S.Card variant={variant} onClick={onClick}>
    <S.Image src={item.image} alt={item.title} />
    <S.Title>{item.title}</S.Title>
    <S.Snippet>
      {item.description.length > 80
        ? item.description.slice(0, 80) + '…'
        : item.description}
    </S.Snippet>
  </S.Card>
);

export default MenuItemCard;
