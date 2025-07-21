
import { createPortal } from 'react-dom'
import { ModalItemData } from '../../data/itemModal'
import { useDispatch } from 'react-redux'
import { addItem, openCart } from '../../store/reducers/cart'
import * as S from './styles'
import closeIcon from '../../assets/close 1.png'

interface Props {
  item: ModalItemData
  onClose(): void
}

export default function ProductModal({ item, onClose }: Props) {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addItem({
      id: item.id.toString(),
      title: item.title,
      description: item.description,
      price: item.price,
      image: item.image,
    }))
    dispatch(openCart())
    onClose()
  }

  return createPortal(
    <S.Overlay onClick={onClose}>
      <S.Content onClick={e => e.stopPropagation()}>
        <S.Left>
          <img src={item.image} alt={item.title} />
        </S.Left>
        <S.Right>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <S.AddModalButton onClick={handleAdd}>
            Adicionar ao carrinho – R$ {item.price.toFixed(2)}
          </S.AddModalButton>
        </S.Right>
        {/* Botão de fechar via imagem */}
        <S.CloseImg
          src={closeIcon}
          alt="Fechar"
          onClick={onClose}
          width={16}
          height={16}
        />
      </S.Content>
    </S.Overlay>,
    document.body
  )
}
