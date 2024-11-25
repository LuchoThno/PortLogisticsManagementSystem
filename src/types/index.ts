export interface Product {
  id: string;
  name: string;
  quantity: number;
  company: string;
  operator: string;
  status: 'in-transit' | 'delivered' | 'departed';
  entryDate?: string;
  exitDate?: string;
}

export interface Movement {
  id: string;
  productId: string;
  type: 'entry' | 'exit';
  quantity: number;
  company: string;
  operator: string;
  date: string;
}