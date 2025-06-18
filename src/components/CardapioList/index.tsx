import React, { useState } from 'react'
import MenuItemCard from '../MenuItemCard'
import ProductModal from '../ProductModal'
import * as S from './styles'
import { CardapioItem } from '../../data/types'

interface CardapioListProps {
  items: CardapioItem[]
}

const CardapioList: React.FC<CardapioListProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null)

  return (
    <>
      <S.Listagem>
        {items.map((item, idx) => (
          <MenuItemCard
            key={item.id}
            item={{
              id: item.id.toString(),
              title: item.nome,
              description: item.descricao,
              price: item.preco,
              image: item.foto,
            }}
            variant={idx % 2 === 0 ? 'even' : 'odd'}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </S.Listagem>

      {selectedItem && (
        <ProductModal
          item={{
            id: selectedItem.id.toString(),
            title: selectedItem.nome,
            description: selectedItem.descricao,
            image: selectedItem.foto,
            price: selectedItem.preco,
          }}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  )
}

export default CardapioList
