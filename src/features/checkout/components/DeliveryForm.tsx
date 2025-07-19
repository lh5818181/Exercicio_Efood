// src/features/checkout/components/DeliveryForm.tsx
import React from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { DeliveryData } from '../types'
import * as S from '../styles'

interface Props {
  onNext(data: DeliveryData): void
  onBack(): void
}

const schema = Yup.object().shape({
  name: Yup.string().required('Obrigatório'),
  address: Yup.string().required('Obrigatório'),
  city: Yup.string().required('Obrigatório'),
  cep: Yup.string()
    .required('Obrigatório')
    .matches(/^\d{5}-?\d{3}$/, 'Formato inválido'),
  number: Yup.string().required('Obrigatório'),
  complement: Yup.string(),
})

const DeliveryForm: React.FC<Props> = ({ onNext, onBack }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        address: '',
        city: '',
        cep: '',
        number: '',
        complement: '',
      }}
      validationSchema={schema}
      onSubmit={values => onNext(values)}
    >
      {() => (
        <FormikForm autoComplete="on">
          <S.Title>Entrega</S.Title>

          <S.Field>
            <S.Label htmlFor="name">Quem irá receber</S.Label>
            <Field
              as={S.Input}
              id="name"
              name="name"
              placeholder="João Paulo de Souza"
              autoComplete="name"
            />
            <S.Error><ErrorMessage name="name" /></S.Error>
          </S.Field>

          <S.Field>
            <S.Label htmlFor="address">Endereço</S.Label>
            <Field
              as={S.Input}
              id="address"
              name="address"
              autoComplete="street-address"
            />
            <S.Error><ErrorMessage name="address" /></S.Error>
          </S.Field>

          <S.Field>
            <S.Label htmlFor="city">Cidade</S.Label>
            <Field
              as={S.Input}
              id="city"
              name="city"
              autoComplete="address-level2"
            />
            <S.Error><ErrorMessage name="city" /></S.Error>
          </S.Field>

          <S.Row>
            <S.Field style={{ flex: 1 }}>
              <S.Label htmlFor="cep">CEP</S.Label>
              <Field
                as={S.Input}
                id="cep"
                name="cep"
                autoComplete="postal-code"
              />
              <S.Error><ErrorMessage name="cep" /></S.Error>
            </S.Field>
            <S.Field style={{ flex: 1, marginLeft: '1rem' }}>
              <S.Label htmlFor="number">Número</S.Label>
              <Field
                as={S.Input}
                id="number"
                name="number"
                autoComplete="address-line2"
              />
              <S.Error><ErrorMessage name="number" /></S.Error>
            </S.Field>
          </S.Row>

          <S.Field>
            <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
            <Field
              as={S.Input}
              id="complement"
              name="complement"
              autoComplete="address-line2"
            />
            <S.Error><ErrorMessage name="complement" /></S.Error>
          </S.Field>

          <S.Button full type="submit">Continuar com o pagamento</S.Button>
          <S.Button full type="button" onClick={onBack}>Voltar para o carrinho</S.Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default DeliveryForm
