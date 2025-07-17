import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeItem, closeCart } from '../../store/reducers/cart'
import * as S from './styles'
import lixeira from '../../assets/lixeira.png'

export default function CartSidebar() {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootState) => state.cart)

  if (!isOpen) return null  // só renderiza se aberto

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <S.Overlay onClick={() => dispatch(closeCart())}>
      <S.Sidebar onClick={e => e.stopPropagation()}>
        <h2>Seu Carrinho</h2>

        <S.ItemList>
          {items.length > 0 ? (
            items.map(item => (
              <S.Item key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.title}</span>
                  <span>
                    R$ {(item.price * item.quantity).toFixed(2)} ({item.quantity}x)
                  </span>
                </div>
                <button onClick={() => dispatch(removeItem(item.id))}>
                  <img className="lixeira" src={lixeira} alt="Remover" />
                </button>
              </S.Item>
            ))
          ) : (
            <S.EmptyMessage>Seu carrinho está vazio.</S.EmptyMessage>
          )}
        </S.ItemList>

        <S.Total>
          <span>Valor total</span>
          <span>R$ {total.toFixed(2)}</span>
        </S.Total>

        {items.length > 0 && (
          <S.CheckoutButton onClick={() => { /* navigate('/checkout') se desejar */ }}>
            Continuar com a entrega
          </S.CheckoutButton>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}
