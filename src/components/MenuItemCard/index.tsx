import React from 'react';
import { MenuItemData } from '../../data/menuItems';
import * as S from './styles';
import { useCart } from '../contexts/CartContext';

interface Props {
  item: MenuItemData;
  onClick(): void;               // abre o ProductModal
  variant: 'even' | 'odd';
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Componente de item de menu.
 *
 * Recebe um item de menu (MenuItemData) e uma fun o de clique.
 * Opcionalmente, pode receber uma variante de estilo (even ou odd) para
 * alternar a cor de fundo do item.
 *
 * @prop {MenuItemData} item - Item de menu.
 * @prop {() => void} onClick - Fun o de clique.
 * @prop {'even'|'odd'} [variant] - Variante de estilo.
 */
export default function MenuItemCard({ item, onClick, variant }: Props) {
  const { add } = useCart();

  return (
    <S.Card variant={variant} onClick={onClick}>
      <S.Image src={item.image} alt={item.title} />
      <S.Title>{item.title}</S.Title>
      <S.Snippet>{item.description}</S.Snippet>

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
}
