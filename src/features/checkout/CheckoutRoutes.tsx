import { Routes, Route, Navigate } from 'react-router-dom'
import DeliveryForm from './components/DeliveryForm'
import PaymentForm from './components/PaymentForm'
import ConfirmationScreen from './components/ConfirmationScreen'
import { DeliveryData, PaymentData } from './types'

export default function CheckoutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="delivery" replace />} />
      <Route path="delivery" element={<DeliveryForm onNext={function (data: DeliveryData): void {
        throw new Error('Function not implemented.')
      } } onBack={function (): void {
        throw new Error('Function not implemented.')
      } } />} />
      <Route path="payment" element={<PaymentForm onNext={function (data: PaymentData): void {
        throw new Error('Function not implemented.')
      } } onBack={function (): void {
        throw new Error('Function not implemented.')
      } } />} />
      <Route path="confirmation" element={<ConfirmationScreen onReset={function (): void {
        throw new Error('Function not implemented.')
      } } />} />
    </Routes>
  )
}
