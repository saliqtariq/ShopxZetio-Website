export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency?: string;
  image: string;
  isNew?: boolean;
}

export type NavigateHandler = (page: string, cat?: string) => void;
