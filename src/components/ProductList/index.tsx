import Product from "../product";
import { Container, Listagem } from "./styles";


const ProductList = () => {  return (
    <Container>
        <div className="container">
        <Listagem>
        <Product />
        </Listagem>
        </div>
    </Container>
);}

export default ProductList;