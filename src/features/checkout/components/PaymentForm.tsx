// src/features/checkout/components/PaymentForm.tsx
import React, { useEffect } from 'react'
import { Formik, Form as FormikForm, Field } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { useCheckout } from '../CheckoutContext'
import { PaymentData } from '../types'
import * as S from '../styles'

interface Props {
  onNext(data: PaymentData): void
  onBack(): void
}

// Schema sem mensagens de texto, apenas validações
const schema = Yup.object().shape({
  nameOnCard: Yup.string().required(),
  cardNumber: Yup.string()
    .required()
    .matches(/^\d{16}$/, 'Inválido'),
  cvv: Yup.string()
    .required()
    .matches(/^\d{3,4}$/, 'Inválido'),
  expiryMonth: Yup.string()
    .required()
    .matches(/^(0[1-9]|1[0-2])$/, 'Inválido'),
  expiryYear: Yup.string()
    .required()
    .matches(/^\d{4}$/, 'Inválido'),
})

const PaymentForm: React.FC<Props> = ({ onNext, onBack }) => {
  const { deliveryData } = useCheckout()
  const items = useSelector((s: RootState) => s.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  useEffect(() => {
    if (!deliveryData) onBack()
  }, [deliveryData, onBack])

  return (
    <Formik
      initialValues={{
        nameOnCard: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
      }}
      validationSchema={schema}
      onSubmit={values => onNext(values)}
    >
      {() => (
        <FormikForm autoComplete="on">
          <S.Title>Pagamento – R$ {total.toFixed(2)}</S.Title>

          <S.Field>
            <S.Label htmlFor="nameOnCard">Nome no cartão</S.Label>
            <Field name="nameOnCard">
              {({ field, meta }: any) => (
                <S.Input
                  {...field}
                  id="nameOnCard"
                  autoComplete="cc-name"
                  className={meta.touched && meta.error ? 'error' : ''}
                />
              )}
            </Field>
          </S.Field>

          <S.Row>
            <S.Field style={{ flex: 1 }}>
              <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
              <Field name="cardNumber">
                {({ field, meta }: any) => (
                  <S.Input
                    {...field}
                    id="cardNumber"
                    autoComplete="cc-number"
                    className={meta.touched && meta.error ? 'error' : ''}
                  />
                )}
              </Field>
            </S.Field>
            <S.Field style={{ width: '6rem', marginLeft: '30px' }}>
              <S.Label htmlFor="cvv">CVV</S.Label>
              <Field name="cvv">
                {({ field, meta }: any) => (
                  <S.Input
                    {...field}
                    id="cvv"
                    autoComplete="cc-csc"
                    className={meta.touched && meta.error ? 'error' : ''}
                  />
                )}
              </Field>
            </S.Field>
          </S.Row>

          <S.Row>
            <S.Field style={{ flex: 1 }}>
              <S.Label htmlFor="expiryMonth">Mês de vencimento</S.Label>
              <Field name="expiryMonth">
                {({ field, meta }: any) => (
                  <S.Input
                    {...field}
                    id="expiryMonth"
                    autoComplete="cc-exp-month"
                    className={meta.touched && meta.error ? 'error' : ''}
                  />
                )}
              </Field>
            </S.Field>
            <S.Field style={{ flex: 1, marginLeft: '34px' }}>
              <S.Label htmlFor="expiryYear">Ano de vencimento</S.Label>
              <Field name="expiryYear">
                {({ field, meta }: any) => (
                  <S.Input
                    {...field}
                    id="expiryYear"
                    autoComplete="cc-exp-year"
                    className={meta.touched && meta.error ? 'error' : ''}
                  />
                )}
              </Field>
            </S.Field>
          </S.Row>

          <S.Button style={{ marginTop: '24px' }} full type="submit">
            Finalizar pagamento
          </S.Button>
          <S.Button full type="button" onClick={onBack}>
            Voltar para o endereço
          </S.Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default PaymentForm
