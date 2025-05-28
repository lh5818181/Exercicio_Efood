import React from 'react';
import Product from '../product';
import { Container, Listagem } from './styles';
import { products } from '../../data/products';

const ProductList: React.FC = () => {
  return (
    <Container>
      <Listagem>
        {products.map(prod => (
          <Product
            key={prod.titulo}
            titulo={prod.titulo}
            nota={prod.nota}
            image={prod.image}
            imageStar={prod.imageStar}
            descricao={prod.descricao}
            infos={prod.infos}
          />
        ))}
      </Listagem>
    </Container>
  );
};

export default ProductList;
