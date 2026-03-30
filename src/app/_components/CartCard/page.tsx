"use client";
import clearFromCartAction from "@/app/cartAction/clearFromCartAction";
import deleteFromCartAction from "@/app/cartAction/deleteFromCartAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type CartItemType = {
  _id?: string;
  quantity: number;
  price: number;
  product: {
    _id?: string;
    name: string;
    cover?: string;
    category: {
      _id?: string;
      name: string;
    };
    subcategory: {
      _id?: string;
      name: string;
      category: {
        _id?: string;
        name: string;
      };
    };
  };
};

type CartCardProps = {
  cart: CartItemType;
};
export default function CartCard({ cart }: CartCardProps) {
  console.log("cartasdasds", cart);

  async function handleDelete() {
    await deleteFromCartAction(cart._id);
    window.location.href = "/cart";
  }

  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.92)] pt-0 text-[#3f2417] shadow-[0_18px_40px_rgba(90,53,35,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_rgba(90,53,35,0.15)] flex flex-col h-full">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#4a2d1e]/55 via-transparent to-transparent opacity-80" />

      {/* <img
        src="/def.jpg"
        alt={cart.product.name}
        className="relative aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      /> */}
      <CardHeader className="relative z-20 gap-3 px-5 pt-5 flex-grow">
        <CardTitle className="text-2xl font-bold tracking-tight text-[#4a2d1e]">
          {cart.product.name}
        </CardTitle>
        <CardDescription className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-3 text-[#7b5843]">
            <div className="rounded-2xl border border-[#7a5036]/10 bg-[rgba(255,255,255,0.55)] px-4 py-3 shadow-[0_8px_20px_rgba(90,53,35,0.05)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#a18472]">
                Price
              </p>
              <p className="mt-1 text-base font-semibold text-[#6d432d]">
                ${cart.price}
              </p>
            </div>

            <div className="rounded-2xl border border-[#7a5036]/10 bg-[rgba(255,255,255,0.55)] px-4 py-3 shadow-[0_8px_20px_rgba(90,53,35,0.05)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#a18472]">
                Quantity
              </p>
              <p className="mt-1 text-base font-semibold text-[#6d432d]">
                {cart.quantity}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[#7b5843]">
            <div className="rounded-2xl border border-[#7a5036]/10 bg-[rgba(255,255,255,0.55)] px-4 py-3 shadow-[0_8px_20px_rgba(90,53,35,0.05)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#a18472]">
                Category
              </p>
              <p className="mt-1 text-base font-semibold text-[#6d432d]">
                {cart.product.category.name}
              </p>
            </div>

            <div className="rounded-2xl border border-[#7a5036]/10 bg-[rgba(255,255,255,0.55)] px-4 py-3 shadow-[0_8px_20px_rgba(90,53,35,0.05)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#a18472]">
                Subcategory
              </p>
              <p className="mt-1 text-base font-semibold text-[#6d432d]">
                {cart.product.subcategory.name}
              </p>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="relative z-20 border-t border-[#7a5036]/10 bg-[rgba(246,230,214,0.72)] p-5 gap-2">
        <p className="text-base font-semibold text-[#6d432d]">
          total price ${cart.price * cart.quantity}
        </p>
        <Button
          onClick={handleDelete}
          className="flex-1 bg-[#6d432d] text-[#fff5eb] shadow-[0_8px_20px_rgba(90,53,35,0.15)] hover:bg-[#7b4f36] hover:-translate-y-0.5 transition-all"
        >
          delete from cart
        </Button>

        {/* <AddToCardButton cartId={cart._id}>add to cart</AddToCardButton> */}
      </CardFooter>
    </Card>
  );
}
