"use client";

import { ProductType } from "@/app/_models/products.type";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";
import AddToCardButton from "../AddToCardButton/AddToCardButton";
import AddToWishlistButton from "../AddToWishlistButton/AddToWishlistButton";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.92)] pt-0 text-[#3f2417] shadow-[0_18px_40px_rgba(90,53,35,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_rgba(90,53,35,0.15)] flex flex-col h-full">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#4a2d1e]/55 via-transparent to-transparent opacity-80" />

      <img
        src="/def.jpg"
        alt={product.name}
        className="relative aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <CardHeader className="relative z-20 gap-3 px-5 pt-5 flex-grow">
        <CardTitle className="text-2xl font-bold tracking-tight text-[#4a2d1e]">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-[#7b5843] space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-[#6d432d]">
              ${product.price}
            </p>

            <p className="text-sm line-through text-[#a58a7a]">
              ${product.price}
            </p>
          </div>

          <p className="text-sm leading-6 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between text-xs text-[#7b5843]">
            <span>Stock: {product.stock}</span>
            <span>Sold: {product.sold}</span>
            {product.ratingAverage && <span>⭐ {product.ratingAvg}</span>}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="relative z-20 border-t border-[#7a5036]/10 bg-[rgba(246,230,214,0.72)] p-5 gap-2">
        {/* <Button className="flex-1 bg-[#6d432d] text-[#fff5eb] shadow-[0_8px_20px_rgba(90,53,35,0.15)] hover:bg-[#7b4f36] hover:-translate-y-0.5 transition-all">
          Add to Cart
        </Button> */}

        <AddToCardButton productId={product._id}>add to cart</AddToCardButton>
        <AddToWishlistButton productId={product._id}>
          <Heart className="w-4 h-4" />
        </AddToWishlistButton>
      </CardFooter>
    </Card>
  );
}
