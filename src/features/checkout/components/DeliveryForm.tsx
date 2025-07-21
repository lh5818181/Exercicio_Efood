// src/features/checkout/components/DeliveryForm.tsx
import React from 'react'
import { Formik, Form as FormikForm, Field } from 'formik'
import * as Yup from 'yup'
import { DeliveryData } from '../types'
import * as S from '../styles'

interface Props {
  onNext(data: DeliveryData): void
  onBack(): void
}

// Removendo mensagens de texto e mantendo apenas a validação obrigatória
const schema = Yup.object().shape({
  name: Yup.string().required(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  cep: Yup.string()
    .required()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  number: Yup.string()
    .required()
    .matches(/^\d+$/, 'Número inválido'),
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

          {/* Nome */}
          <S.Field>
            <S.Label htmlFor="name">Quem irá receber</S.Label>
            <Field name="name">
              {({ field, meta }: any) => (
                <S.Input
                  {...field}
                  id="name"
                  placeholder="João Paulo de Souza"
                  autoComplete="name"
                  className={meta.touched && meta.error ? 'error' : ''}
                />
              )}
            </Field>
          </S.Field>

          {/* Endereço */}
          <S.Field>
            <S.Label htmlFor="address">Endereço</S.Label>
            <Field name="address">
              {({ field, meta }: any) => (
                <S.Input
                  {...field}
                  id="address"
                  autoComplete="street-address"
                  className={meta.touched && meta.error ? 'error' : ''}
                />
              )}
            </Field>
          </S.Field>

          {/* Cidade */}
          <S.Field>
            <S.Label htmlFor="city">Cidade</S.Label>
            <Field name="city">
              {({ field, meta }: any) => (
                <S.Input
                  {...field}
                  id="city"
                  autoComplete="address-level2"
                  className={meta.touched && meta.error ? 'error' : ''}
                />
              )}
            </Field>
          </S.Field>

          {/* CEP e Número */}
          <S.Row>
            <S.Field style={{ flex: 1 }}>
              <S.Label htmlFor="cep">CEP</S.Label>
              <Field name="cep">
                {({ field, form, meta }: any) => {
                  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    let v = e.target.value.replace(/\D/g, '')
                    if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8)
                    form.setFieldValue('cep', v)
                  }
                  return (
                    <S.Input
                      {...field}
                      id="cep"
                      placeholder="12345-678"
                      autoComplete="postal-code"
                      className={meta.touched && meta.error ? 'error' : ''}
                      onChange={handleCepChange}
                    />
                  )
                }}
              </Field>
            </S.Field>
            <S.Field style={{ flex: 1, marginLeft: '1rem' }}>
              <S.Label htmlFor="number">Número</S.Label>
              <Field name="number">
                {({ field, meta }: any) => (
                  <S.Input
                    {...field}
                    id="number"
                    autoComplete="address-line2"
                    className={meta.touched && meta.error ? 'error' : ''}
                  />
                )}
              </Field>
            </S.Field>
          </S.Row>

          {/* Complemento */}
          <S.Field>
            <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
            <Field name="complement">
              {({ field }: any) => (
                <S.Input
                  {...field}
                  id="complement"
                  autoComplete="address-line2"
                  style={{ marginBottom: '24px' }}
                />
              )}
            </Field>
          </S.Field>

          <S.Button full type="submit">Continuar com o pagamento</S.Button>
          <S.Button full type="button" onClick={onBack}>Voltar para o carrinho</S.Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default DeliveryForm
