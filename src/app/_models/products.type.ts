export interface ProductType {
  title: string;
  price: number;
  description: string;
  stock: number;
  category: string;
  subCategory: string;
  brand: string;
  imageCover?: File;
  images?: File[];
}
