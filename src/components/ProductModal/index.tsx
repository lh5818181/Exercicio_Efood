// src/components/ProductModal/index.tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalItemData } from '../../data/modalItem';
import { useCart } from '../contexts/CartContext'; 
import * as S from './styles';

interface Props {
  item: ModalItemData;
  onClose(): void;
}

const ProductModal: React.FC<Props> = ({ item, onClose }) => {
  const { add } = useCart();
  const [qty] = useState(1);

  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Content>
        <button className="close" onClick={onClose}>
          ×
        </button>
        <img src={item.image} alt={item.title} />              {/* ← imagem grande */}
        <h2>{item.title}</h2>                                  {/* ← título */}
        <p>{item.description}</p>                              {/* ← descrição completa */}
        <button
          onClick={() => {
            add(item, qty);
            onClose();
          }}
        >
          Adicionar ao carrinho – R${(item.price * qty).toFixed(2)}
        </button>
      </S.Content>
    </S.Overlay>,
    document.body
  );
};

export default ProductModal;
