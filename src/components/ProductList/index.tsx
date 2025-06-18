import React, { useEffect, useState } from 'react'
import Product from '../product'
import { Container, Listagem } from './styles'
import { Restaurante } from '../../data/types'
import estrelaImg from '../../assets/estrela.png'

export default function ProductList() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => {
        if (!res.ok) throw new Error('Falha ao carregar')
        return res.json()
      })
      .then((data: Restaurante[]) => {
        setRestaurantes(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <Container>Carregando restaurantes...</Container>
  if (error)   return <Container>Erro: {error}</Container>

  return (
    <Container>
      <Listagem>
        {restaurantes.map(r => (
          <Product
            key={r.id}
            id={r.id}                       // passou id
            titulo={r.titulo}
            nota={r.avaliacao.toFixed(1)}
            image={r.capa}
            imageStar={estrelaImg}
            descricao={r.descricao}
            infos={[
              r.destacado ? 'Destaque' : '',
              r.tipo.charAt(0).toUpperCase() + r.tipo.slice(1),
            ].filter(Boolean)}
          />
        ))}
      </Listagem>
    </Container>
  )
}
