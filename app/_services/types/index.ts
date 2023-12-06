export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IRating;
  count: number;
  rate: number;
  title: string;
}
