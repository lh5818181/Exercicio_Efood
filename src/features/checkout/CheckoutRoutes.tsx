// src/features/checkout/CheckoutRoutes.tsx
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
              navigate('/checkout/payment')
            }}
            onBack={() => navigate(-1)}
          />
        }
      />

      <Route
        path="payment"
        element={
          <PaymentForm
            onNext={(data: PaymentData) => {
              setPaymentData(data)
              navigate('/checkout/confirmation')
            }}
            onBack={() => navigate('/checkout/delivery')}
          />
        }
      />

      <Route
        path="confirmation"
        element={<ConfirmationScreen />}
      />
    </Routes>
  )
}
