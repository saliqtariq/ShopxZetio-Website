export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency?: string;
  image: string;
  isNew?: boolean;
  description?: string;
  specs?: string[];
  deliveryTime?: string;
}
