import { useState } from 'react'
import { DeliveryData } from '../types'
import * as S from '../styles'

interface Props {
  onNext: (data: DeliveryData) => void
}

const DeliveryForm = ({ onNext }: Props) => {
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
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(form)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Entrega</S.Title>

      {['name', 'address', 'city', 'cep', 'number', 'complement'].map((field) => (
        <div key={field}>
          <S.Label>
            {field === 'name'
              ? 'Quem irá receber'
              : field === 'cep'
              ? 'CEP'
              : field === 'number'
              ? 'Número'
              : field === 'complement'
              ? 'Complemento (opcional)'
              : field.charAt(0).toUpperCase() + field.slice(1)}

            <S.Input
              type="text"
              name={field}
              value={(form as any)[field]}
              onChange={handleChange}
              required={field !== 'complement'}
            />
          </S.Label>
        </div>
      ))}

      <S.Button type="submit">Continuar com o pagamento</S.Button>
    </S.Form>
  )
}

export default DeliveryForm
