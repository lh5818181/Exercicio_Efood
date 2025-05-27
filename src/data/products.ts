// src/data/products.ts
import hiokiSushiImg from '../assets/Hioki Sushi.png';
import estrelaImg from '../assets/estrela.png';

export interface ProductData {
  titulo: string;
  nota: string;
  image: string;
  imageStar: string;
  descricao: string;
  infos: string[];
}

export const products: ProductData[] = [
  {
    titulo: 'Hioki Sushi',
    nota: '4.9',
    image: hiokiSushiImg,
    imageStar: estrelaImg,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da Semana', 'Japonesa'],
  },
  {
    titulo: 'Hioki Sushi',
    nota: '4.9',
    image: hiokiSushiImg,
    imageStar: estrelaImg,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da Semana', 'Japonesa'],
  },
  // se quiser adicionar mais cards, só colar aqui:
  // {
  //   titulo: 'Outra Cozinha',
  //   nota: '4.5',
  //   image: outraImg,
  //   imageStar: estrelaImg,
  //   descricao: 'Descrição...',
  //   infos: ['Tag1', 'Tag2'],
  // },
];
