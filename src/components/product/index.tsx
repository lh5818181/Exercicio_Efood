import {
  ProductContainer,
  Card,
  Descricao,
  Button,
  Titulo,
  Infos,
  ContainerTagTitle,
  Rating,          // <-- importe aqui
  ProductImage,
} from './styles';
import Tag from '../Tag';

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
          <Button>Saiba mais</Button>
        </div>
      </Card>
    </ProductContainer>
  );
}