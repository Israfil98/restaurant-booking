import { type IRestaurantInfo } from '../types';

export const restaurantInfo: IRestaurantInfo = {
  name: 'Dinespot',
  tagline: 'Where every dish tells a story',
  description:
    'Nestled in the heart of the city, Dinespot brings together bold flavors and timeless technique. Our chefs craft each plate with locally sourced ingredients, turning every meal into a moment worth savoring.',
  address: '42 Heritage Lane, Downtown District',
  phone: '(555) 234-5678',
  email: 'hello@dinespot.com',
  hours: [
    { days: 'Monday – Friday', time: '11:00 AM – 10:00 PM' },
    { days: 'Saturday – Sunday', time: '10:00 AM – 11:00 PM' },
  ],
  socials: [
    { platform: 'instagram', url: '#' },
    { platform: 'facebook', url: '#' },
    { platform: 'x', url: '#' },
  ],
};
