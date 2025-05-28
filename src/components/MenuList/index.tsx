import React, { useState } from 'react';
import { menuItems } from '../../data/menuItems';
import MenuItemCard from '../MenuItem';
import ProductModal from '../ProductModal';
import * as S from './styles';

const MenuList: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <S.Listagem>
        {menuItems.map((it, idx) => (
          <MenuItemCard
            key={it.id}
            item={it}
            variant={idx % 2 === 0 ? 'even' : 'odd'}
            onClick={() => setSelected(it.id)}
          />
        ))}
      </S.Listagem>
      {selected && (
        <ProductModal
          item={menuItems.find((i) => i.id === selected)!}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default MenuList;
