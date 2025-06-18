import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import ProfileBanner from '../components/ProfileBanner';
import MenuItemCard from '../components/MenuItemCard';
import ProductModal from '../components/ProductModal';
import CartSidebar from '../components/CartSidebar';
import Footer from '../components/Footer';

import imgFundoProfile from '../assets/imagem-fundo-perfil.png';
import estrelaImg from '../assets/estrela.png';

import { useCart } from '../components/contexts/CartContext';
import { Restaurante, CardapioItem } from '../data/types';

export default function Profile() {
  const { id } = useParams<{ id: string }>();
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null);
  const { isOpen, toggleSidebar } = useCart();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar restaurante');
        return res.json();
      })
      .then((data: Restaurante) => {
        setRestaurante(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Carregando restaurante...</div>;
  if (error)   return <div>Erro: {error}</div>;
  if (!restaurante) return null;

  return (
    <>
      <Header />

      <ProfileBanner
        bg={restaurante.capa || imgFundoProfile}
        category={restaurante.tipo.charAt(0).toUpperCase() + restaurante.tipo.slice(1)}
        name={restaurante.titulo}
      />

      <main style={{ padding: '2rem' }}>
        <h2>Cardápio</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {restaurante.cardapio.map(item => (
            <MenuItemCard
              key={item.id}
              item={{
                id: item.id.toString(),
                title: item.nome,
                description: item.descricao,
                price: item.preco,
                image: item.foto,
              }}
              variant="even"
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </main>

      {selectedItem && (
        <ProductModal
          item={{
            id: selectedItem.id.toString(),
            title: selectedItem.nome,
            description: selectedItem.descricao,
            image: selectedItem.foto,
            price: selectedItem.preco,
          }}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {isOpen && <CartSidebar onClose={toggleSidebar} />}

      <Footer />
    </>
  );
}
