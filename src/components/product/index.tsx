import { ProductContainer, Card, Descricao, Button, Titulo, Infos, ContainerTagTitle } from "./styles";

import Tag from "../Tag";

type Props = {
  titulo: string;
  nota: string;
  image: string;
  ImageStar: string;
  descricao: string;
  infos: string[]
}

const Product = ({ titulo, nota, image, ImageStar, descricao, infos }: Props) => {
  return (
    <ProductContainer>
      <Card>
      <img  src={image} alt={''}/>
      <Infos>
        {infos.map(info => <Tag key={info}>{info}</Tag>)}
      </Infos>
      <div className="containerProduct">
      <ContainerTagTitle>
      <Titulo>{titulo}</Titulo>
      <Tag >
        {nota}
        <img src={ImageStar} alt={''} />
      </Tag>
      </ContainerTagTitle>

      <Descricao>{descricao}</Descricao>
        <Button>Saiba mais</Button>
      </div>
      </Card>
    </ProductContainer>
  );
}   
export default Product;