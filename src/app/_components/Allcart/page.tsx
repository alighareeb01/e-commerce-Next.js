import React from "react";
import CartCard from "../CartCard/page";
import { Button } from "@/components/ui/button";
import clearFromCartAction from "@/app/cartAction/clearFromCartAction";
import ClearCartButton from "../ClearCartButton/ClearCartButton";
import PlaceOrderButton from "../PlaceOrderButton/PlaceOrderButton";

// import CartCard from "../CartCard/page";

type CartCategoryType = {
  _id?: string;
  name: string;
};

type CartSubcategoryType = {
  _id?: string;
  name: string;
  category: CartCategoryType;
};

type CartItemType = {
  _id?: string;
  quantity: number;
  price: number;
  product: {
    _id?: string;
    name: string;
    cover?: string;
    category: CartCategoryType;
    subcategory: CartSubcategoryType;
  };
};

type CartResponseType = {
  length: number;
  data: {
    _id?: string;
    cartItems: CartItemType[];
    user: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalPrice: number;
  };
};

type AllCartProps = {
  cart: CartResponseType;
};

// async function handleClear() {
//   await clearFromCartAction();
// }
export default function page({ cart }: AllCartProps) {
  console.log("cartId", cart._id);

  return (
    <div>
      <section className="py-4 pb-10 text-[#3f2417]">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-[2rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.78)] p-6 shadow-[0_20px_60px_rgba(90,53,35,0.08)] backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-[#4a2d1e] sm:text-5xl">
                  Cart
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#7b5843] sm:text-base">
                  {cart.cartItems
                    ? "Review your items before checkout. ❤️"
                    : "nothing in your cart 😭"}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#7a5036]/12 bg-[rgba(255,248,240,0.9)] p-5 shadow-[0_10px_30px_rgba(90,53,35,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(90,53,35,0.12)]">
                  <h2 className="text-lg font-semibold text-[#7b5843]">
                    Total Items
                  </h2>

                  <p className="mt-2 text-3xl font-bold text-[#4a2d1e]">
                    {cart.cartItems?.length || 0}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#7a5036]/12 bg-[rgba(255,248,240,0.9)] p-5 shadow-[0_10px_30px_rgba(90,53,35,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(90,53,35,0.12)]">
                  <h2 className="text-lg font-semibold text-[#7b5843]">
                    Total Price
                  </h2>

                  <p className="mt-2 text-3xl font-bold text-[#4a2d1e]">
                    ${cart?.totalPrice || 0}
                  </p>
                </div>
              </div>
              <PlaceOrderButton cartId={cart._id}>Plcae order</PlaceOrderButton>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cart.cartItems?.map((el, index: number) => {
                return <CartCard key={el._id ?? index} cart={el} />;
              })}
            </div>
            {cart.cartItems && <ClearCartButton />}
          </div>
        </div>
      </section>
    </div>
  );
}
