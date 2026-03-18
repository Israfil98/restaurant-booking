export interface IMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface ITestimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

export interface IRestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    days: string;
    time: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
}
