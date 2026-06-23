export interface Pizza {
  id: number;
  name: string;
  init: string;
  pizza: string;
  image: string;
  price: number;
  base: string;
  type: string;
}

export interface PizzaFilter {
  toggle: string;
  base: string;
  type: string;
  maxPrice: number;
}

