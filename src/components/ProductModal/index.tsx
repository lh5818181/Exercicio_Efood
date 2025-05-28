import React from 'react';
import { createPortal } from 'react-dom';
import {  ModalItemData } from '../../data/itemModal';           
import { useCart } from '../../components/contexts/CartContext';          
import * as S from './styles';

interface Props {
  item: ModalItemData;
  onClose(): void;
}
const ProductModal: React.FC<Props> = ({ item, onClose }) => {
  const { add } = useCart();

  const handleAdd = () => {
    add(item, 1);          // adiciona 1 unidade
    onClose();             // fecha o modal
  };

  return createPortal(
    <S.Overlay>
      <S.Content>
        {/* bloco da imagem e botão de fechar */}
        <div>
          <button
            className="close"
            aria-label="Fechar modal"
            onClick={onClose}
          >
            ×
          </button>
          <img src={item.image} alt={item.title} />
        </div>

        {/* bloco do texto, descrição e botão */}
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>                      {/* ← descrição completa */}
          <button onClick={handleAdd}>
            Adicionar ao carrinho – R$ {item.price.toFixed(2)}
          </button>
        </div>
      </S.Content>
    </S.Overlay>,
    document.body,
  );
};

export default ProductModal;
