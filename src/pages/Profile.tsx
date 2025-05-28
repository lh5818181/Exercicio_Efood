import React from 'react';
import Header from '../components/Header';
import ProfileBanner from '../components/ProfileBanner';
import MenuList from '../components/MenuList';
import CartSidebar from '../components/CartSidebar';
import imgFundoProfile from '../assets/imagem-fundo-perfil.png';

export default function Profile() {
  return (
    <>
      <Header />
      <ProfileBanner
        bg={imgFundoProfile}
        category="Italiana"
        name="La Dolce Vita Trattoria"
      />
      <MenuList />
      <CartSidebar />
    </>
  );
}
