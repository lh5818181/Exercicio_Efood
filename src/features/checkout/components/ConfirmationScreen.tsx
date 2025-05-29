import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckout } from '../CheckoutContext'
import * as S from '../styles'

interface Props {
  onReset(): void
}

const ConfirmationScreen: React.FC<Props> = ({ onReset }) => {
  const { deliveryData, paymentData } = useCheckout()
  const navigate = useNavigate()

  useEffect(() => {
    if (!deliveryData || !paymentData) navigate('../delivery')
  }, [deliveryData, paymentData, navigate])

  return (
    <S.ConfirmationContainer>
      <S.Title>Pedido Confirmado! 🎉</S.Title>
      <S.Text>
        Obrigado, {deliveryData?.name}. <br /><br />
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue
         no endereço fornecido.<br /><br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br /><br />
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua 
        segurança e bem-estar durante a refeição.<br /><br />
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </S.Text>

      <S.Button full onClick={onReset}>
        Concluir
      </S.Button>
    </S.ConfirmationContainer>
  )
}

export default ConfirmationScreen
