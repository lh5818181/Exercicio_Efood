// src/data/products.ts
import hiokiSushiImg from '../assets/Hioki Sushi.png';
import LaDolceImg from  '../assets/macarrao-italiano.png'
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
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: LaDolceImg,
    imageStar: estrelaImg,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
  },
    {
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: LaDolceImg,
    imageStar: estrelaImg,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
  },
    {
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: LaDolceImg,
    imageStar: estrelaImg,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
  },
    {
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: LaDolceImg,
    imageStar: estrelaImg,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
  },
    {
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    image: LaDolceImg,
    imageStar: estrelaImg,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
  },
];
