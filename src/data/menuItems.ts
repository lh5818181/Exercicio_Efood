
import pizzaImg from '../assets/pizza.png';
import massaImg from '../assets/pizza.png';

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
      'Massa fina, molho de tomate, mussarela derretida, manjericão fresco e azeite.',
    price: 58.9,
    image: pizzaImg,
  },
  {
    id: 'macarrao-alfredo',
    title: 'Macarrão Alfredo',
    description:
      'Fettuccine ao molho cremoso, queijo parmesão e toque de noz-moscada.',
    price: 45.0,
    image: massaImg,
  },
];
