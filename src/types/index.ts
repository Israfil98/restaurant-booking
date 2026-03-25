export interface IMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string | null;
  available: boolean;
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

export interface IBookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  notes: string;
}

export interface IBooking {
  id: string;
  customer_name: string;
  customer_email: string;
  date: string;
  time: string;
  party_size: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  notes: string | null;
  created_at: string;
}
