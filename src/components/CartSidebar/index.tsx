// src/components/CartSidebar/index.tsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import * as S from './styles';

const CartSidebar: React.FC = () => {
  const { items, total, remove, isOpen } = useCart();
  if (!isOpen) return null;                                   // ← oculta se fechado

  return (
    <S.Panel>
      <h2>Carrinho</h2>
      <S.Items>
        {items.map((it) => (
          <S.Item key={it.id}>
            <img src={it.image} alt={it.title} />             {/* ← imagem */}
            <div>
              <strong>{it.title}</strong>                     {/* ← título */}
              <span>R${(it.price * it.quantity).toFixed(2)}</span>  {/* ← preço */}
            </div>
            <button onClick={() => remove(it.id)}>🗑️</button> {/* ← ícone excluir */}
          </S.Item>
        ))}
      </S.Items>
      <S.Total>
        <span>Valor total</span>
        <strong>R${total.toFixed(2)}</strong>
      </S.Total>
      <button>Continuar com a entrega</button>
    </S.Panel>
  );
};

export default CartSidebar;
