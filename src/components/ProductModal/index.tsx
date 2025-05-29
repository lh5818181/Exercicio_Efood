import React from 'react';
import { createPortal } from 'react-dom';
import { ModalItemData } from '../../data/itemModal';
import { useCart } from '../contexts/CartContext';
import * as S from './styles';
import { CloseButton } from './styles';

interface Props {
  item: ModalItemData;
  onClose(): void;
}

export default function ProductModal({ item, onClose }: Props) {
  const { add } = useCart();

  const handleAdd = () => {
    add(item, 1);
    onClose();
  };

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
            Adicionar ao carrinho - R$ {item.price.toFixed(2)}
          </S.AddModalButton>
        </S.Right>
        <CloseButton className="close" aria-label="Fechar" onClick={onClose}>
          ×
        </CloseButton>
      </S.Content>
    </S.Overlay>,
    document.body
  );
}
