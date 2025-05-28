import pizzaImg from '../assets/pizza.png';

export interface ModalItemData {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

export const itemModal: ModalItemData[] = [
  {
    id: 'pizza-marguerita',
    title: 'Pizza Marguerita',
    description:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. Serve: de 2 a 3 pessoas',
    price: 58.9,
    image: pizzaImg,
  },
];
