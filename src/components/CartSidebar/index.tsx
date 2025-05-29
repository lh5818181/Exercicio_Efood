import React, { useState, useEffect } from 'react'
import { useCart } from '../contexts/CartContext'
import { useCheckout } from '../../features/checkout/CheckoutContext'
import * as S from './styles'
import DeliveryForm from '../../features/checkout/components/DeliveryForm'
import PaymentForm from '../../features/checkout/components/PaymentForm'
import ConfirmationScreen from '../../features/checkout/components/ConfirmationScreen'

type Step = 'cart' | 'delivery' | 'payment' | 'confirmation'

export default function CartSidebar({ onClose }: { onClose(): void }) {
  const { items, total, remove } = useCart()
  const {
    deliveryData, paymentData,
    setDeliveryData, setPaymentData, reset: resetCheckout
  } = useCheckout()

  const [step, setStep] = useState<Step>('cart')

  // Se carrinho esvaziar, volta ao passo 'cart'
  useEffect(() => {
    if (items.length === 0) setStep('cart')
  }, [items])

  // Ao concluir
  const handleDone = () => {
    resetCheckout()
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Sidebar onClick={e => e.stopPropagation()}>
        <button
          className="close"
          onClick={() => { onClose(); setStep('cart') }}
        >
          ×
        </button>

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
                      <span>R$ {item.price.toFixed(2)}</span>
                    </div>
                    <button onClick={() => remove(item.id)}>🗑️</button>
                  </S.Item>
                ))
              ) : (
                <S.EmptyMessage>Carrinho vazio.</S.EmptyMessage>
              )}
            </S.ItemList>

            <S.Total>
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </S.Total>

            {items.length > 0 && (
              <S.CheckoutButton onClick={() => setStep('delivery')}>
                Continuar com a entrega
              </S.CheckoutButton>
            )}
          </>
        )}

        {step === 'delivery' && (
          <>
            <DeliveryForm
              onNext={data => {
                setDeliveryData(data)
                setStep('payment')
              }}
              onBack={() => setStep('cart')}
            />
          </>
        )}

        {step === 'payment' && (
          <>
            <PaymentForm
              onNext={data => {
                setPaymentData(data)
                setStep('confirmation')
              }}
              onBack={() => setStep('delivery')}
            />
          </>
        )}

        {step === 'confirmation' && (
          <>
            <ConfirmationScreen onReset={handleDone} />
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}
