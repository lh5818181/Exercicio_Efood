// src/features/checkout/components/PaymentForm.tsx
import React, { useState, useEffect } from 'react'
import { useCheckout } from '../CheckoutContext'
import { PaymentData } from '../types'
import * as S from '../styles'

interface Props {
  onNext(data: PaymentData): void
  onBack(): void
}

const PaymentForm: React.FC<Props> = ({ onNext, onBack }) => {
  const { deliveryData } = useCheckout()
  const [form, setForm] = useState<PaymentData>({
    nameOnCard: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  })

  // não deixa acessar sem dados de entrega
  useEffect(() => {
    if (!deliveryData) onBack()
  }, [deliveryData, onBack])

  const total = deliveryData ? Number(deliveryData.number) : 0 // você pode trazer o total real do contexto/cart

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(form)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>
        Pagamento – Valor a pagar R$ {total.toFixed(2)}
      </S.Title>

      <S.Field>
        <S.Label>Nome no cartão</S.Label>
        <S.Input
          type="text"
          name="nameOnCard"
          value={form.nameOnCard}
          onChange={handleChange}
          required
        />
      </S.Field>

      <S.Row>
        <S.Field style={{ flex: 1 }}>
          <S.Label>Número do cartão</S.Label>
          <S.Input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            required
          />
        </S.Field>
        <S.Field style={{ width: '6rem', marginLeft: '1rem' }}>
          <S.Label>CVV</S.Label>
          <S.Input
            type="text"
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            required
          />
        </S.Field>
      </S.Row>

      <S.Row>
        <S.Field style={{ flex: 1 }}>
          <S.Label>Mês de vencimento</S.Label>
          <S.Input
            type="text"
            name="expiryMonth"
            value={form.expiryMonth}
            onChange={handleChange}
            required
          />
        </S.Field>
        <S.Field style={{ flex: 1, marginLeft: '1rem' }}>
          <S.Label>Ano de vencimento</S.Label>
          <S.Input
            type="text"
            name="expiryYear"
            value={form.expiryYear}
            onChange={handleChange}
            required
          />
        </S.Field>
      </S.Row>

      <S.Button full type="submit">
        Finalizar pagamento
      </S.Button>
      <S.Button type="button" onClick={onBack}>
        Voltar para a edição de endereço
      </S.Button>
    </S.Form>
  )
}

export default PaymentForm
