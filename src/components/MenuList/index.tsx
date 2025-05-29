import React, { useState } from 'react';
import MenuItemCard from '../MenuItemCard';
import ProductModal from '../ProductModal';
import * as S from './styles';

import { menuItems } from '../../data/menuItems';
import { itemModal } from '../../data/itemModal';

interface MenuListProps {
  onSelectItem(id: string): void;
}

const MenuList: React.FC<MenuListProps> = ({ onSelectItem }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = selectedId
    ? itemModal.find(i => i.id === selectedId)!
    : null;

  const handleClick = (id: string) => {
    setSelectedId(id);
    onSelectItem(id);
  };

  return (
    <>
      <S.Listagem>
        {menuItems.map((it, idx) => (
          <MenuItemCard
            key={it.id}
            item={it}
            variant={idx % 2 === 0 ? 'even' : 'odd'}
            onClick={() => handleClick(it.id)}
          />
        ))}
      </S.Listagem>

      {selectedItem && (
        <ProductModal item={selectedItem} onClose={() => setSelectedId(null)} />
      )}
    </>
  );
};

export default MenuList;
