
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  brand: string;
  tags?: string[];
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  description: string;
  tags: string[];
}
