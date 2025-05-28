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
import { Link } from 'react-router-dom'; // Importa o Link

type Props = {
  titulo: string;
  nota: string;
  image: string;
  ImageStar: string;
  descricao: string;
  infos: string[];
};

export default function Product({
  titulo,
  nota,
  image,
  ImageStar,
  descricao,
  infos,
}: Props) {
  return (
    <ProductContainer>
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
              <img src={ImageStar} alt="estrela" />
            </Rating>
          </ContainerTagTitle>
          <Descricao>{descricao}</Descricao>
          <Link to={`/Profile`}>
            <Button as="span">Saiba mais</Button>
          </Link>
        </div>
      </Card>
    </ProductContainer>
  );
}