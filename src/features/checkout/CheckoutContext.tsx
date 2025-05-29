import React, { createContext, useContext, useState, ReactNode } from 'react'
import { DeliveryData, PaymentData } from './types'

interface CheckoutContextData {
  deliveryData: DeliveryData | null
  paymentData: PaymentData | null
  setDeliveryData(data: DeliveryData): void
  setPaymentData(data: PaymentData): void
  reset(): void
}

const CheckoutContext = createContext<CheckoutContextData>({} as any)

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [deliveryData, _setDeliveryData] = useState<DeliveryData | null>(null)
  const [paymentData, _setPaymentData] = useState<PaymentData | null>(null)

  const setDeliveryData = (data: DeliveryData) => _setDeliveryData(data)
  const setPaymentData = (data: PaymentData) => _setPaymentData(data)
  const reset = () => {
    _setDeliveryData(null)
    _setPaymentData(null)
  }

  return (
    <CheckoutContext.Provider
      value={{ deliveryData, paymentData, setDeliveryData, setPaymentData, reset }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => useContext(CheckoutContext)
