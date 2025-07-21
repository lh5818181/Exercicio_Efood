// src/features/checkout/components/PaymentForm.tsx
import React, { useEffect } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
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

const schema = Yup.object().shape({
  nameOnCard: Yup.string().required('Obrigatório'),
  cardNumber: Yup.string()
    .required('Obrigatório')
    .matches(/^\d{16}$/, '16 dígitos'),
  cvv: Yup.string()
    .required('Obrigatório')
    .matches(/^\d{3,4}$/, '3 ou 4 dígitos'),
  expiryMonth: Yup.string()
    .required('Obrigatório')
    .matches(/^(0[1-9]|1[0-2])$/, 'MM'),
  expiryYear: Yup.string()
    .required('Obrigatório')
    .matches(/^\d{4}$/, 'AAAA'),
})

const PaymentForm: React.FC<Props> = ({ onNext, onBack }) => {
  const { deliveryData } = useCheckout()
  const items = useSelector((s: RootState) => s.cart.items)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // redireciona se não veio do delivery
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
          <S.Title>Pagamento – Valor a pagar R$ {total.toFixed(2)}</S.Title>

          <S.Field>
            <S.Label htmlFor="nameOnCard">Nome no cartão</S.Label>
            <Field
              as={S.Input}
              id="nameOnCard"
              name="nameOnCard"
              autoComplete="cc-name"
            />
            <S.Error><ErrorMessage name="nameOnCard" /></S.Error>
          </S.Field>

          <S.Row>
            <S.Field style={{ flex: 1 }}>
              <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
              <Field
                as={S.Input}
                id="cardNumber"
                name="cardNumber"
                autoComplete="cc-number"
              />
              <S.Error><ErrorMessage name="cardNumber" /></S.Error>
            </S.Field>
            <S.Field style={{ width: '6rem', marginLeft: '30px' }}>
              <S.Label htmlFor="cvv">CVV</S.Label>
              <Field
                as={S.Input}
                id="cvv"
                name="cvv"
                autoComplete="cc-csc"
              />
              <S.Error><ErrorMessage name="cvv" /></S.Error>
            </S.Field>
          </S.Row>

          <S.Row>
            <S.Field style={{ flex: 1 }}>
              <S.Label htmlFor="expiryMonth">Mês de vencimento</S.Label>
              <Field
                as={S.Input}
                id="expiryMonth"
                name="expiryMonth"
                autoComplete="cc-exp-month"
              />
              <S.Error><ErrorMessage name="expiryMonth" /></S.Error>
            </S.Field>
            <S.Field style={{ flex: 1, marginLeft: '34px' }}>
              <S.Label htmlFor="expiryYear">Ano de vencimento</S.Label>
              <Field
                as={S.Input}
                id="expiryYear"
                name="expiryYear"
                autoComplete="cc-exp-year"
              />
              <S.Error><ErrorMessage name="expiryYear" /></S.Error>
            </S.Field>
          </S.Row>

          <S.Button style={{ flex: 1, marginTop: '24px' }} full type="submit">Finalizar pagamento</S.Button>
          <S.Button full type="button" onClick={onBack}>
            Voltar para a edição de endereço
          </S.Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default PaymentForm
