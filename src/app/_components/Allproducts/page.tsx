import React from "react";
import ProductCard from "../ProductCard/page";
import { ProductType } from "@/app/_models/products.type";

type AllproductProps = {
  product: ProductType;
};
export default function Allproducts({ product }: AllproductProps) {
  return (
    <div>
      <div className="min-h-screen bg-slate-950 py-8 text-slate-100">
        <div className="container mx-auto px-4">
          <h1 className="my-6 text-center text-3xl font-bold tracking-tight text-cyan-200">
            Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
            {product.map((el, index) => (
              <ProductCard key={el._id ?? index} product={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
