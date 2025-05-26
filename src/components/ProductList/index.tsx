import Product from "../product";
import { Container, Listagem } from "./styles";
import hiokiSushiImg from '../../assets/Hioki Sushi.png';
import estrelaImg from '../../assets/estrela.png';

const ProductList = () => {
    return (
        <Container>
            <div className="container">
                <Listagem>
                    <Product
                        titulo="Hioki Sushi"
                        nota="4.9"
                        image={hiokiSushiImg}
                        ImageStar={estrelaImg}
                        descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
                        infos={['Destaque da Semana', 'Japonesa']}
                    />
                </Listagem>
            </div>
        </Container>
    );
};

export default ProductList;