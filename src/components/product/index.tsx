import { ProductContainer, Card, Descricao, Button, Titulo } from "./styles";

import productImg from "../../assets/Hioki Sushi.png";

const Product = () => {
  return (
    <ProductContainer>
      <Card>
      <img  src={productImg} alt="Product Image" />
      <div className="containerProduct">
      <Titulo>Hioki Sushi</Titulo>
      <Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</Descricao>
        <Button>Saiba mais</Button>
      </div>
      </Card>
            <Card>
      <img  src={productImg} alt="Product Image" />
      <div className="containerProduct">
      <Titulo>Hioki Sushi</Titulo>
      <Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</Descricao>
        <Button>Saiba mais</Button>
      </div>
      </Card>
            <Card>
      <img  src={productImg} alt="Product Image" />
      <div className="containerProduct">
      <Titulo>Hioki Sushi</Titulo>
      <Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</Descricao>
        <Button>Saiba mais</Button>
      </div>
      </Card>
      <Card>
      <img  src={productImg} alt="Product Image" />
      <div className="containerProduct">
      <Titulo>Hioki Sushi</Titulo>
      <Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</Descricao>
        <Button>Saiba mais</Button>
      </div>
      </Card>
      <Card>
      <img  src={productImg} alt="Product Image" />
      <div className="containerProduct">
      <Titulo>Hioki Sushi</Titulo>
      <Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</Descricao>
        <Button>Saiba mais</Button>
      </div>
      </Card>
      <Card>
      <img  src={productImg} alt="Product Image" />
      <div className="containerProduct">
      <Titulo>Hioki Sushi</Titulo>
      <Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</Descricao>
        <Button>Saiba mais</Button>
      </div>
      </Card>
    </ProductContainer>
  );
}   
export default Product;