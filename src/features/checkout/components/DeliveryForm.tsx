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

      {(
        [
          ['name', 'Quem irá receber'],
          ['address', 'Endereço'],
          ['city', 'Cidade'],
          ['cep', 'CEP'],
          ['number', 'Número'],
          ['complement', 'Complemento (opcional)'],
        ] as [keyof DeliveryData, string][]
      ).map(([field, label]) => (
        <S.Field key={field}>
          <S.Label>{label}</S.Label>
          <S.Input
            type="text"
            name={field}
            value={form[field] || ''}
            onChange={handleChange}
            required={field !== 'complement'}
          />
        </S.Field>
      ))}

      <S.Flex>
        <S.Button type="button" onClick={onBack}>
          Voltar
        </S.Button>
        <S.Button full type="submit">
          Continuar
        </S.Button>
      </S.Flex>
    </S.Form>
  )
}

export default DeliveryForm
