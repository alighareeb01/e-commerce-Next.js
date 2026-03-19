import React from "react";
import ProductCard from "../ProductCard/page";
import { ProductType } from "@/app/_models/products.type";

type ProductItem = ProductType & {
  imageCover?: string | File | Array<string | File>;
};

type AllproductProps = {
  product: ProductItem[];
};

export default function Allproducts({ product }: AllproductProps) {
  return (
    <section className="py-4 pb-10 text-[#3f2417]">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.78)] p-6 shadow-[0_20px_60px_rgba(90,53,35,0.08)] backdrop-blur-xl sm:p-8">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-[#4a2d1e] sm:text-5xl">
                Products
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#7b5843] sm:text-base">
                Discover our products
              </p>
            </div>

            <div className="rounded-2xl border border-[#7a5036]/12 bg-[rgba(255,248,240,0.9)] p-5 shadow-[0_10px_30px_rgba(90,53,35,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(90,53,35,0.12)]">
              <h2 className="text-lg font-semibold text-[#7b5843]">
                Total Products
              </h2>

              <p className="mt-2 text-3xl font-bold text-[#4a2d1e]">
                {product.length}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.map((el, index: number) => (
              <ProductCard key={el._id ?? index} product={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
