import React from 'react';
import {
  ProductContainer,
  Card,
  Descricao,
  Button,
  Titulo,
  Infos,
  ContainerTagTitle,
  Rating,
  ProductImage,
} from './styles';
import Tag from '../Tag';
import { Link } from 'react-router-dom';

export interface ProductProps {
  titulo: string;
  nota: string;
  image: string;
  imageStar: string;
  descricao: string;
  infos: string[];
}

const Product: React.FC<ProductProps> = ({
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
        <Descricao>{descricao}</Descricao>
        <Button to="/profile">Saiba mais</Button>
      </div>
    </Card>
  
);

export default Product;
