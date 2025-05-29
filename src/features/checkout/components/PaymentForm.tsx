import { useState } from 'react'
import { PaymentData } from '../types'
import * as S from '../styles'

interface Props {
  onNext: (data: PaymentData) => void
  onBack: () => void
}

export default function PaymentForm({ onNext, onBack }: Props) {
  const [form, setForm] = useState<PaymentData>({
    nameOnCard: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  })

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

      {/* Nome impresso no cartão */}
      <S.Label>
        Nome no cartão
        <S.Input
          type="text"
          name="nameOnCard"
          value={form.nameOnCard}
          onChange={handleChange}
          required
        />
      </S.Label>

      {/* Número do cartão */}
      <S.Label>
        Número do cartão
        <S.Input
          type="text"
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          required
        />
      </S.Label>

      {/* Validade: mês e ano lado a lado */}
      <S.Flex>
        <div style={{ flex: 1 }}>
          <S.Label>
            Mês de validade (MM)
            <S.Input
              type="text"
              name="expiryMonth"
              placeholder="MM"
              value={form.expiryMonth}
              onChange={handleChange}
              required
            />
          </S.Label>
        </div>

        <div style={{ flex: 1 }}>
          <S.Label>
            Ano de validade (AA)
            <S.Input
              type="text"
              name="expiryYear"
              placeholder="AA"
              value={form.expiryYear}
              onChange={handleChange}
              required
            />
          </S.Label>
        </div>
      </S.Flex>

      {/* CVV */}
      <S.Label>
        CVV
        <S.Input
          type="text"
          name="cvv"
          value={form.cvv}
          onChange={handleChange}
          required
        />
      </S.Label>

      {/* Botões de navegação */}
      <S.Flex>
        <S.Button type="button" onClick={onBack}>
          Voltar
        </S.Button>
        <S.Button type="submit">
          Finalizar pedido
        </S.Button>
      </S.Flex>
    </S.Form>
  )
}
