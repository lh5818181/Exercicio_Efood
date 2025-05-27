// src/components/ProductList/index.tsx
import React from 'react';
import Product from '../product/index';
import { Container, Listagem } from './styles';
import { products } from '../../data/products';

const ProductList = () => {
  return (
    <Container>
      <div className="container">
        <Listagem>
          {products.map(prod => (
            <Product
              key={prod.titulo}
              titulo={prod.titulo}
              nota={prod.nota}
              image={prod.image}
              ImageStar={prod.imageStar}
              descricao={prod.descricao}
              infos={prod.infos}
            />
          ))}
        </Listagem>
      </div>
    </Container>
  );
};

export default ProductList;
