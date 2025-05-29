import React, { useState } from 'react';
import Header from '../components/Header';
import ProfileBanner from '../components/ProfileBanner';
import MenuList from '../components/MenuList';
import ProductModal from '../components/ProductModal';
import CartSidebar from '../components/CartSidebar';
import imgFundoProfile from '../assets/imagem-fundo-perfil.png';
import { itemModal } from '../data/itemModal';
import { useCart } from '../components/contexts/CartContext';
import Footer from '../components/Footer';

export default function Profile() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const { isOpen, toggleSidebar } = useCart();

  const handleSelectItem = (id: string) => {
    setSelectedItemId(id);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

  const modalData = selectedItemId
    ? itemModal.find(item => item.id === selectedItemId)!
    : null;

  return (
    <><>
      <Header />

      <ProfileBanner
        bg={imgFundoProfile}
        category="Italiana"
        name="La Dolce Vita Trattoria" />

      <MenuList onSelectItem={handleSelectItem} />

      {modalData && (
        <ProductModal item={modalData} onClose={handleCloseModal} />
      )}

      {isOpen && <CartSidebar onClose={toggleSidebar} />}
    </><Footer /></>
  );
}
