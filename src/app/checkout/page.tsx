import React from "react";
import { fetchCart } from "../_api/fetchCart";
import CheckoutForm from "../_components/checkoutform/CheckoutForm";

type CheckoutPageProps = {
  searchParams: Promise<{
    cartId?: string;
  }>;
};

export default async function page({ searchParams }: CheckoutPageProps) {
  // const { cartId } = await searchParams;
  // console.log(cartId);

  const cart = await fetchCart();
  console.log("asrasg", cart);

  // const productId = cart.cartItems[0].product._id;
  // const quantity = cart.cartItems[0].quantity;
  // console.log("idds", productId, quantity);

  // const { cartId } = await searchParams;
  // console.log(cartId);

  return (
    <div>
      <CheckoutForm cart={cart.cartItems} />
    </div>
  );
}
