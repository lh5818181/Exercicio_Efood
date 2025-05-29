import { useState } from 'react'
import DeliveryForm from './components/DeliveryForm'
import PaymentForm from './components/PaymentForm'
import ConfirmationScreen from './components/ConfirmationScreen'
import { CheckoutStep, DeliveryData, PaymentData } from './types'

const Checkout = () => {
  const [step, setStep] = useState<CheckoutStep>('delivery')
  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null)
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)

  const handleDeliveryNext = (data: DeliveryData) => {
    setDeliveryData(data)
    setStep('payment')
  }

  const handlePaymentNext = (data: PaymentData) => {
    setPaymentData(data)
    setStep('confirmation')
  }

  const handleReset = () => {
    setStep('delivery')
    setDeliveryData(null)
    setPaymentData(null)
  }

  return (
    <>
      {step === 'delivery' && (
        <DeliveryForm onNext={handleDeliveryNext} />
      )}

      {step === 'payment' && deliveryData && (
        <PaymentForm
          onNext={handlePaymentNext}
          onBack={() => setStep('delivery')}
        />
      )}

      {step === 'confirmation' && (
        <ConfirmationScreen onReset={handleReset} />
      )}
    </>
  )
}

export default Checkout
