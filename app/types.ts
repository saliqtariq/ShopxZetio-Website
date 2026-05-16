export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export type NavigateHandler = (page: string, cat?: string) => void;
