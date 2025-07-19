// src/features/checkout/components/ConfirmationScreen.tsx
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
  orderId?: string
  onReset?: () => void
}

const ConfirmationScreen: React.FC<Props> = ({ orderId, onReset }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { deliveryData, paymentData, reset } = useCheckout()
  const items = useSelector((s: RootState) => s.cart.items)

  const [order, setOrder] = useState<OrderResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (orderId) {
      setLoading(false)
      return
    }
    if (!deliveryData) {
      navigate('/checkout/delivery', { replace: true })
      return
    }
    if (!paymentData) {
      navigate('/checkout/payment', { replace: true })
      return
    }
    if (items.length === 0) {
      dispatch(closeCart())
      navigate('/', { replace: true })
      return
    }

    const payload = {
      products: items.map(i => ({ id: Number(i.id), price: i.price })),
      delivery: {
        receiver: deliveryData.name,
        address: {
          description: deliveryData.address,
          city: deliveryData.city,
          zipCode: deliveryData.cep,
          number: Number(deliveryData.number),
          complement: deliveryData.complement || '',
        }
      },
      payment: {
        card: {
          name: paymentData.nameOnCard,
          number: paymentData.cardNumber,
          code: Number(paymentData.cvv),
          expires: {
            month: Number(paymentData.expiryMonth),
            year: Number(paymentData.expiryYear),
          }
        }
      }
    }

    fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) throw new Error('Falha ao enviar pedido.')
        return res.json()
      })
      .then((data: OrderResponse) => {
        setOrder(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [
    orderId,
    deliveryData,
    paymentData,
    items,
    dispatch,
    navigate,
    reset
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
        <S.Button full onClick={() => (onReset ? onReset() : navigate('/'))}>
          Voltar ao início
        </S.Button>
      </S.ConfirmationContainer>
    )
  }

  const finish = () => {
    if (onReset) {
      onReset()
    } else {
      dispatch(resetCart())
      reset()
      navigate('/')
    }
  }

  const id = orderId || order!.orderId

  return (
    <S.ConfirmationContainer>
      <S.Title>Pedido realizado – {id}</S.Title>

      <S.Text>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
      </S.Text>

      <S.Text>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
      </S.Text>

      <S.Text>
        Lembre‑se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem‑estar durante a refeição.
      </S.Text>

      <S.Text>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </S.Text>

      <S.Button full onClick={finish}>
        Concluir
      </S.Button>
    </S.ConfirmationContainer>
  )
}

export default ConfirmationScreen
