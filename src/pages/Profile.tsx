import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import ProfileBanner from '../components/ProfileBanner'
import CardapioList from '../components/CardapioList'
import CartSidebar from '../components/CartSidebar'
import Footer from '../components/Footer'

import imgFallback from '../assets/imagem-fundo-perfil.png'


import { useCart } from '../components/contexts/CartContext'
import { Restaurante } from '../data/types'

export default function Profile() {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { isOpen, toggleSidebar } = useCart()

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar')
        return res.json()
      })
      .then((data: Restaurante) => {
        setRestaurante(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div>Carregando...</div>
  if (error)   return <div>Erro: {error}</div>
  if (!restaurante) return null

  return (
    <>
      <Header />

      <ProfileBanner
        bg={restaurante.capa || imgFallback}
        category={restaurante.tipo}
        name={restaurante.titulo}
      />

      <main>
        <CardapioList items={restaurante.cardapio} />
      </main>

      {isOpen && <CartSidebar onClose={toggleSidebar} />}

      <Footer />
    </>
  )
}
