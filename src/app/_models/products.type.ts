export interface ProductType {
  _id?: string;
  title: string;
  price: number;
  description: string;
  stock: number;
  category: string;
  subCategory: string;
  brand: string;
  imageCover?: string | File;
  images?: Array<string | File>;
}
