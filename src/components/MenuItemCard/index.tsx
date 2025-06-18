import React from 'react'
import { MenuItemData } from '../../data/menuItems'
import * as S from './styles'
import { useCart } from '../contexts/CartContext'

interface MenuItemCardProps {
  item: MenuItemData
  variant: 'even' | 'odd'
  onClick(): void
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, variant, onClick }) => {
  const { add } = useCart()

  return (
    <S.Card variant={variant} onClick={onClick}>
      <S.Image src={item.image} alt={item.title} />
      <S.Title>{item.title}</S.Title>
      <S.Snippet>
        {item.description.length > 190
          ? item.description.slice(0, 190) + '...'
          : item.description}
      </S.Snippet>
      <S.AddButton
        onClick={e => {
          e.stopPropagation()
          add(item)
        }}
      >
        Adicionar ao carrinho
      </S.AddButton>
    </S.Card>
  )
}

export default MenuItemCard
