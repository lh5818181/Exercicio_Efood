// src/features/checkout/components/DeliveryForm.tsx
import React, { useState } from 'react'
import { DeliveryData } from '../types'
import * as S from '../styles'

interface Props {
  onNext(data: DeliveryData): void
  onBack(): void
}

const DeliveryForm: React.FC<Props> = ({ onNext, onBack }) => {
  const [form, setForm] = useState<DeliveryData>({
    name: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: '',
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
      <S.Title>Entrega</S.Title>

      <S.Field>
        <S.Label>Quem irá receber</S.Label>
        <S.Input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="João Paulo de Souza"
          required
        />
      </S.Field>

      <S.Field>
        <S.Label>Endereço</S.Label>
        <S.Input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </S.Field>

      <S.Field>
        <S.Label>Cidade</S.Label>
        <S.Input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
        />
      </S.Field>

      <S.Row>
        <S.Field style={{ flex: 1 }}>
          <S.Label>CEP</S.Label>
          <S.Input
            type="text"
            name="cep"
            value={form.cep}
            onChange={handleChange}
            required
          />
        </S.Field>
        <S.Field style={{ flex: 1, marginLeft: '1rem' }}>
          <S.Label>Número</S.Label>
          <S.Input
            type="text"
            name="number"
            value={form.number}
            onChange={handleChange}
            required
          />
        </S.Field>
      </S.Row>

      <S.Field>
        <S.Label>Complemento (opcional)</S.Label>
        <S.Input
          type="text"
          name="complement"
          value={form.complement}
          onChange={handleChange}
        />
      </S.Field>

      <S.Button full type="submit">
        Continuar com o pagamento
      </S.Button>
      <S.Button type="button" onClick={onBack}>
        Voltar para o carrinho
      </S.Button>
    </S.Form>
  )
}

export default DeliveryForm
