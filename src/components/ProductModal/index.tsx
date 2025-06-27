
import React from 'react'
import { createPortal } from 'react-dom'
import { ModalItemData } from '../../data/itemModal'
import { useDispatch } from 'react-redux'
import { addItem, openCart } from '../../store/reducers/cart'
import * as S from './styles'
import { CloseButton } from './styles'

interface Props {
  item: ModalItemData
  onClose(): void
}

export default function ProductModal({ item, onClose }: Props) {
  const dispatch = useDispatch()

  const handleAdd = () => {
    // Despacha para adicionar ao carrinho e abrir o sidebar
    dispatch(addItem({
      id: item.id.toString(),       // converte para string se necessário
      title: item.title,
      description: item.description,
      price: item.price,
      image: item.image,
    }))
    dispatch(openCart())
    onClose()
  }

  return createPortal(
    <S.Overlay onClick={onClose}>
      <S.Content onClick={e => e.stopPropagation()}>
        <S.Left>
          <img src={item.image} alt={item.title} />
        </S.Left>
        <S.Right>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <S.AddModalButton onClick={handleAdd}>
            Adicionar ao carrinho – R$ {item.price.toFixed(2)}
          </S.AddModalButton>
        </S.Right>
        <CloseButton className="close" onClick={onClose}>
          ×
        </CloseButton>
      </S.Content>
    </S.Overlay>,
    document.body
  )
}
