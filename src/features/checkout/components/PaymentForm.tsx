import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckout } from '../CheckoutContext'
import { PaymentData } from '../types'
import * as S from '../styles'

interface Props {
  onNext(data: PaymentData): void
  onBack(): void
}

const PaymentForm: React.FC<Props> = ({ onNext, onBack }) => {
  const [form, setForm] = useState<PaymentData>({
    nameOnCard: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  })
  const { deliveryData } = useCheckout()
  const navigate = useNavigate()

  // se não houver dados de entrega, volta
  useEffect(() => {
    if (!deliveryData) navigate('../delivery', { replace: true })
  }, [deliveryData, navigate])

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
      <S.Title>Pagamento</S.Title>

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

      <S.Field>
        <S.Label>Número do cartão</S.Label>
        <S.Input
          type="text"
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          required
        />
      </S.Field>

      <S.Flex>
        <S.Field flex={1}>
          <S.Label>MM</S.Label>
          <S.Input
            type="text"
            name="expiryMonth"
            value={form.expiryMonth}
            onChange={handleChange}
            required
          />
        </S.Field>
        <S.Field flex={1}>
          <S.Label>AA</S.Label>
          <S.Input
            type="text"
            name="expiryYear"
            value={form.expiryYear}
            onChange={handleChange}
            required
          />
        </S.Field>
      </S.Flex>

      <S.Field>
        <S.Label>CVV</S.Label>
        <S.Input
          type="text"
          name="cvv"
          value={form.cvv}
          onChange={handleChange}
          required
        />
      </S.Field>

      <S.Flex>
        <S.Button type="button" onClick={onBack}>
          Voltar
        </S.Button>
        <S.Button full type="submit">
          Finalizar
        </S.Button>
      </S.Flex>
    </S.Form>
  )
}

export default PaymentForm
