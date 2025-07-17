import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckout } from '../CheckoutContext'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { resetCart, closeCart } from '../../../store/reducers/cart'
import * as S from '../styles'

interface OrderResponse {
  orderId: string
  message: string
}

interface Props {
  onReset(): void
}

const ConfirmationScreen: React.FC<Props> = ({ onReset }) => {
  const { deliveryData, paymentData } = useCheckout()
  const cartItems = useSelector((s: RootState) => s.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [order, setOrder] = useState<OrderResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!deliveryData) {
      navigate('../delivery', { replace: true })
      return
    }
    if (!paymentData) {
      navigate('../payment', { replace: true })
      return
    }
    if (cartItems.length === 0) {
      dispatch(closeCart())
      navigate('/', { replace: true })
      return
    }

    // POST do pedido
    fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        delivery: deliveryData,
        payment: paymentData,
        items: cartItems,
      }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Falha ao enviar pedido.')
        return res.json()
      })
      .then((data: OrderResponse) => {
        setOrder(data)
        setLoading(false)
        dispatch(resetCart()) // limpa carrinho
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [
    deliveryData,
    paymentData,
    cartItems,
    dispatch,
    navigate,
  ])

  if (loading) {
    return (
      <S.ConfirmationContainer>
        <S.Title>Enviando pedido...</S.Title>
      </S.ConfirmationContainer>
    )
  }

  if (error) {
    return (
      <S.ConfirmationContainer>
        <S.Title>Erro</S.Title>
        <S.Text>{error}</S.Text>
        <S.Button full onClick={() => navigate('/')}>
          Voltar ao início
        </S.Button>
      </S.ConfirmationContainer>
    )
  }

  return (
    <S.ConfirmationContainer>
      <S.Title>Pedido realizado – {order!.orderId}</S.Title>
      <S.Text>{order!.message}</S.Text>
      <S.Button full onClick={onReset}>
        Concluir
      </S.Button>
    </S.ConfirmationContainer>
  )
}

export default ConfirmationScreen
