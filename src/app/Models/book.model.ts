// book.model.ts
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  productImage: string;
  barcodeImage: string;
  stock: number;
  category: string;
}