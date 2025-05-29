
import pizzaImg from '../assets/pizza.png';

export interface MenuItemData {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const menuItems: MenuItemData[] = [
  {
    id: 'pizza-marguerita',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 58.9,
    image: pizzaImg,
  },
  {
    id: 'pizza-calabresa',
    title: 'Pizza Calabresa',
    description:
      'Molho de tomate, mussarela, calabresa fatiada, cebola e orégano. Uma explosão de sabor tradicional.',
    price: 62.5,
    image: pizzaImg,
  },
  {
    id: 'pizza-portuguesa',
    title: 'Pizza Portuguesa',
    description:
      'Molho de tomate, mussarela, presunto, ovos, cebola, pimentão e azeitonas. Uma receita clássica e completa.',
    price: 65.0,
    image: pizzaImg,
  },
  {
    id: 'pizza-frango-catupiry',
    title: 'Pizza Frango com Catupiry',
    description:
      'Molho de tomate, mussarela, frango desfiado e catupiry cremoso. Sabor irresistível!',
    price: 68.0,
    image: pizzaImg,
  },
  {
    id: 'pizza-quatro-queijos',
    title: 'Pizza Quatro Queijos',
    description:
      'Molho de tomate, mussarela, provolone, parmesão e gorgonzola. Para os amantes de queijo!',
    price: 70.0,
    image: pizzaImg,
  },
  {
    id: 'pizza-vegetariana',
    title: 'Pizza Vegetariana',
    description:
      'Molho de tomate, mussarela, tomate, cebola, pimentão, champignon e azeitonas. Leve e deliciosa.',
    price: 60.0,
    image: pizzaImg,
  },
];
