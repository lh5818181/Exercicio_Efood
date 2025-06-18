import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Descricao,
  Button,
  Titulo,
  Infos,
  ContainerTagTitle,
  Rating,
  ProductImage,
} from './styles'
import Tag from '../Tag'

export interface ProductProps {
  id: number             // novo
  titulo: string
  nota: string
  image: string
  imageStar: string
  descricao: string
  infos: string[]
}

const Product: React.FC<ProductProps> = ({
  id,
  titulo,
  nota,
  image,
  imageStar,
  descricao,
  infos,
}) => (
  <Card>
    <ProductImage src={image} alt={titulo} />

    <Infos>
      {infos.map(info => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>

    <div className="containerProduct">
      <ContainerTagTitle>
        <Titulo>{titulo}</Titulo>
        <Rating>
          {nota}
          <img src={imageStar} alt="estrela" />
        </Rating>
      </ContainerTagTitle>

      <Descricao>
        {descricao.length > 190
          ? descricao.slice(0, 190) + '...'
          : descricao}
      </Descricao>

      <Button as={Link} to={`/profile/${id}`}>
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Product
