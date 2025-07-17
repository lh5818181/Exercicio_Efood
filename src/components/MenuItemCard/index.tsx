// src/components/MenuItemCard/index.tsx
import React, { useState } from 'react'
import * as S from './styles'
import ProductModal from '../ProductModal'
import { MenuItemData } from '../../data/menuItems'

interface MenuItemCardProps {
  item: MenuItemData
  variant: 'even' | 'odd'
  onClick(): void
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, variant, onClick }) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <S.Card variant={variant} onClick={onClick}>
        <S.Image src={item.image} alt={item.title} />
        <S.Title>{item.title}</S.Title>
        <S.Snippet>
          {item.description.length > 190
            ? item.description.slice(0, 190) + '...'
            : item.description}
        </S.Snippet>

        {/* Ao clicar, apenas abre o modal */}
        <S.AddButton
          onClick={e => {
            e.stopPropagation()
            setModalOpen(true)
          }}
        >
          Adicionar ao carrinho
        </S.AddButton>
      </S.Card>

      {/* Modal só abre aqui */}
      {modalOpen && (
        <ProductModal
          item={item}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}

export default MenuItemCard
