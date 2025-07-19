import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeItem, closeCart, resetCart } from '../../store/reducers/cart'
import { useCheckout } from '../../features/checkout/CheckoutContext'
import DeliveryForm from '../../features/checkout/components/DeliveryForm'
import PaymentForm from '../../features/checkout/components/PaymentForm'
import ConfirmationScreen from '../../features/checkout/components/ConfirmationScreen'
import * as S from './styles'
import lixeira from '../../assets/lixeira.png'

type Step = 'cart' | 'delivery' | 'payment' | 'confirmation'

export default function CartSidebar() {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootState) => state.cart)

  // Contexto de checkout
  const {
    deliveryData,
    paymentData,
    setDeliveryData,
    setPaymentData,
    reset
  } = useCheckout()

  const [step, setStep] = useState<Step>('cart')

  // Se o carrinho esvaziar, volta ao passo inicial
  useEffect(() => {
    if (items.length === 0) {
      setStep('cart')
      reset()
    }
  }, [items, reset])

  const handleClose = () => {
    dispatch(closeCart())
    setStep('cart')
    reset()
  }

  // Chamado apenas ao clicar em “Concluir” na confirmação
  const handleDone = () => {
    dispatch(resetCart())
    handleClose()
  }

  if (!isOpen) return null

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <S.Overlay onClick={handleClose}>
      <S.Sidebar onClick={e => e.stopPropagation()}>

        {step === 'cart' && (
          <>
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
                <S.EmptyMessage>Carrinho vazio.</S.EmptyMessage>
              )}
            </S.ItemList>

            {items.length > 0 && (
              <>
                <S.Total>
                  <span>Valor total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </S.Total>
                <S.CheckoutButton onClick={() => setStep('delivery')}>
                  Continuar com a entrega
                </S.CheckoutButton>
              </>
            )}
          </>
        )}

        {step === 'delivery' && (
          <DeliveryForm
            onNext={data => {
              setDeliveryData(data)
              setStep('payment')
            }}
            onBack={() => setStep('cart')}
          />
        )}

        {step === 'payment' && (
          <PaymentForm
            onNext={data => {
              setPaymentData(data)
              setStep('confirmation')
            }}
            onBack={() => setStep('delivery')}
          />
        )}

        {step === 'confirmation' && (
          <ConfirmationScreen onReset={handleDone} />
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}
