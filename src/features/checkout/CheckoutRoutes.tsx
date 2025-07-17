import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useCheckout } from './CheckoutContext'
import DeliveryForm from './components/DeliveryForm'
import PaymentForm from './components/PaymentForm'
import ConfirmationScreen from './components/ConfirmationScreen'
import { DeliveryData, PaymentData } from './types'

export default function CheckoutRoutes() {
  const { setDeliveryData, setPaymentData } = useCheckout()
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<Navigate to="delivery" replace />} />

      <Route
        path="delivery"
        element={
          <DeliveryForm
            onNext={(data: DeliveryData) => {
              setDeliveryData(data)
              navigate('../payment')   // navega para pagamento
            }}
            onBack={() => navigate('../')} // volta à home
          />
        }
      />

      <Route
        path="payment"
        element={
          <PaymentForm
            onNext={(data: PaymentData) => {
              setPaymentData(data)
              navigate('../confirmation')  // navega para confirmação
            }}
            onBack={() => navigate('../delivery')} // volta à entrega
          />
        }
      />

      <Route path="confirmation" element={<ConfirmationScreen />} />
    </Routes>
  )
}
