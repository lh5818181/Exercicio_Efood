// src/contexts/CartContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { MenuItemData } from '../../data/menuItems';

export interface CartItem extends MenuItemData {
  quantity: number;
}

interface CartContextData {
  items: CartItem[];
  total: number;
  isOpen: boolean;               // ← controla visibilidade
  add(item: MenuItemData, qty?: number): void;
  remove(id: string): void;
  toggleSidebar(): void;
}

const CartContext = createContext<CartContextData>({} as any);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // soma total
  const total = items.reduce(
    (sum, it) => sum + it.price * it.quantity,
    0
  );

  function add(item: MenuItemData, qty = 1) {
    setItems((old) => {
      const exists = old.find((i) => i.id === item.id);
      if (exists) {
        return old.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + qty }
            : i
        );
      }
      return [...old, { ...item, quantity: qty }];
    });
    setIsOpen(true);           // ← abre sidebar ao adicionar
  }

  function remove(id: string) {
    setItems((old) => old.filter((i) => i.id !== id));
  }

  // alterna sidebar
  function toggleSidebar() {
    setIsOpen((o) => !o);
  }

  // fecha sidebar se carrinho ficar vazio
  useEffect(() => {
    if (items.length === 0) setIsOpen(false);  // ← fechar vazio
  }, [items]);

  return (
    <CartContext.Provider
      value={{ items, total, isOpen, add, remove, toggleSidebar }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
