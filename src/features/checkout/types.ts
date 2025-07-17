export type CheckoutStep = 'delivery' | 'payment' | 'confirmation'

export interface DeliveryData {
  name: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

export interface PaymentData {
  nameOnCard: string    // Nome impresso no cartão
  cardNumber: string    // Número do cartão
  expiryMonth: string   // Mês de validade (MM)
  expiryYear: string    // Ano de validade (AA)
  cvv: string           // Código de segurança
}
