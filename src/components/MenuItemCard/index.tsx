import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, openCart } from '../../store/reducers/cart'
import { MenuItemData } from '../../data/menuItems'
import * as S from './styles'

interface MenuItemCardProps {
  item: MenuItemData
  variant: 'even' | 'odd'
  onClick(): void   
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, variant, onClick }) => {
  const dispatch = useDispatch()

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(addItem(item))   // adiciona o item
    dispatch(openCart())      // abre o sidebar
  }

  return (
    <S.Card variant={variant} onClick={onClick}>
      <S.Image src={item.image} alt={item.title} />
      <S.Title>{item.title}</S.Title>
      <S.Snippet>
        {item.description.length > 190
          ? item.description.slice(0, 190) + '...'
          : item.description}
      </S.Snippet>
      <S.AddButton onClick={handleAdd}>
        Adicionar ao carrinho
      </S.AddButton>
    </S.Card>
  )
}

export default MenuItemCard
