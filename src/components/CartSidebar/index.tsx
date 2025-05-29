import React from 'react'
import { useCart } from '../contexts/CartContext'
import * as S from './styles'
import { Link } from 'react-router-dom'

export default function CartSidebar({ onClose }: { onClose(): void }) {
  const { items, total, remove } = useCart()

  return (
    <S.Overlay onClick={onClose}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          ×
        </button>

        <h2>Seu Carrinho</h2>

        <S.ItemList>
          {items.length > 0 ? (
            items.map((item) => (
              <S.Item key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.title}</span>
                  <span>R$ {item.price.toFixed(2)}</span>
                </div>
                <button onClick={() => remove(item.id)}>🗑️</button>
              </S.Item>
            ))
          ) : (
            <S.EmptyMessage>Seu carrinho está vazio.</S.EmptyMessage>
          )}
        </S.ItemList>

        <S.Total>
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </S.Total>

        {items.length > 0 && (
          <S.CheckoutButton as={Link} to="/checkout" onClick={onClose}>
            Continuar com a entrega
          </S.CheckoutButton>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}
