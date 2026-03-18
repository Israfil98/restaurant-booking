import { type IMenuItem } from '../types';

export const featuredMenu: IMenuItem[] = [
  {
    id: 'fm-1',
    name: 'Seared Duck Breast',
    description:
      'Crispy skin, tender meat, served with a cherry reduction and roasted root vegetables.',
    price: 32,
    category: 'Mains',
    image: '/images/duck.jpg',
  },
  {
    id: 'fm-2',
    name: 'Truffle Burrata',
    description:
      'Creamy burrata drizzled with black truffle oil, heirloom tomatoes, and fresh basil.',
    price: 18,
    category: 'Starters',
    image: '/images/burrata.jpg',
  },
  {
    id: 'fm-3',
    name: 'Chocolate Lava Cake',
    description:
      'Warm, molten center with a crisp shell, paired with vanilla bean gelato.',
    price: 14,
    category: 'Desserts',
    image: '/images/lava-cake.jpg',
  },
];
