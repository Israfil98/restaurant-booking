import { type IMenuItem } from '../types';

export const menuItems: IMenuItem[] = [
  // Starters
  {
    id: 'mi-1',
    name: 'Truffle Burrata',
    description:
      'Creamy burrata drizzled with black truffle oil, heirloom tomatoes, and fresh basil.',
    price: 18,
    category: 'Starters',
    image: '/images/burrata.jpg',
  },
  {
    id: 'mi-2',
    name: 'Tuna Tartare',
    description:
      'Sushi-grade tuna with avocado, sesame, soy glaze, and crispy wonton chips.',
    price: 16,
    category: 'Starters',
    image: '/images/tuna-tartare.jpg',
  },
  {
    id: 'mi-3',
    name: 'French Onion Soup',
    description:
      'Slow-cooked caramelized onions in rich beef broth, topped with gruyère crouton.',
    price: 14,
    category: 'Starters',
    image: '/images/french-onion.jpg',
  },

  // Mains
  {
    id: 'mi-4',
    name: 'Seared Duck Breast',
    description:
      'Crispy skin, tender meat, served with a cherry reduction and roasted root vegetables.',
    price: 32,
    category: 'Mains',
    image: '/images/duck.jpg',
  },
  {
    id: 'mi-5',
    name: 'Pan-Seared Salmon',
    description:
      'Atlantic salmon with lemon beurre blanc, asparagus, and fingerling potatoes.',
    price: 28,
    category: 'Mains',
    image: '/images/salmon.jpg',
  },
  {
    id: 'mi-6',
    name: 'Filet Mignon',
    description:
      'Prime 8oz cut with red wine jus, truffle mashed potatoes, and grilled broccolini.',
    price: 42,
    category: 'Mains',
    image: '/images/filet.jpg',
  },
  {
    id: 'mi-7',
    name: 'Wild Mushroom Risotto',
    description:
      'Arborio rice with porcini, shiitake, and oyster mushrooms, finished with parmesan.',
    price: 24,
    category: 'Mains',
    image: '/images/risotto.jpg',
  },

  // Desserts
  {
    id: 'mi-8',
    name: 'Chocolate Lava Cake',
    description:
      'Warm, molten center with a crisp shell, paired with vanilla bean gelato.',
    price: 14,
    category: 'Desserts',
    image: '/images/lava-cake.jpg',
  },
  {
    id: 'mi-9',
    name: 'Crème Brûlée',
    description:
      'Classic vanilla custard with a perfectly caramelized sugar crust.',
    price: 12,
    category: 'Desserts',
    image: '/images/creme-brulee.jpg',
  },
  {
    id: 'mi-10',
    name: 'Tiramisu',
    description:
      'Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.',
    price: 13,
    category: 'Desserts',
    image: '/images/tiramisu.jpg',
  },

  // Drinks
  {
    id: 'mi-11',
    name: 'Signature Old Fashioned',
    description:
      'Bourbon, demerara sugar, aromatic bitters, and a flamed orange peel.',
    price: 16,
    category: 'Drinks',
    image: '/images/old-fashioned.jpg',
  },
  {
    id: 'mi-12',
    name: 'Espresso Martini',
    description:
      'Vodka, fresh espresso, coffee liqueur, shaken with a frothy top.',
    price: 15,
    category: 'Drinks',
    image: '/images/espresso-martini.jpg',
  },
  {
    id: 'mi-13',
    name: 'House Red Wine',
    description:
      'A smooth Cabernet Sauvignon with notes of dark cherry, vanilla, and oak.',
    price: 12,
    category: 'Drinks',
    image: '/images/red-wine.jpg',
  },
];
