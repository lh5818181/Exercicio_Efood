import * as S from '../styles'

interface Props {
  onReset: () => void
}

const ConfirmationScreen = ({ onReset }: Props) => {
  return (
    <S.ConfirmationContainer>
      <S.Title>Pedido Confirmado! 🎉</S.Title>
      <S.Text>Recebemos seu pedido e ele está sendo processado.</S.Text>
      <S.Text>Você receberá uma notificação quando sair para entrega.</S.Text>

      <S.Button onClick={onReset}>Voltar para a loja</S.Button>
    </S.ConfirmationContainer>
  )
}

export default ConfirmationScreen
