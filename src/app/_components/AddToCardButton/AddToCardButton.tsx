"use client";
import addToCartAction from "@/app/cartAction/addToCartAction";
import { Button } from "@/components/ui/button";
import React from "react";
import { showToast } from "nextjs-toast-notify";

type AddToCardButtonProps = {
  productId: string;
  children: React.ReactNode;
};

export default function AddToCardButton({
  productId,
  children,
}: AddToCardButtonProps) {
  //

  async function addToCart() {
    const data = await addToCartAction(productId,1);
    // console.log("add to cart data", data);
    if (data == false) {
      showToast.info("please login first and come back", {
        duration: 4000,
        progress: true,
        position: "top-left",
        transition: "bounceIn",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6d432d" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',

        sound: true,
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 4000);
    } else {
      showToast.success("added to cart successfully", {
        duration: 4000,
        progress: true,
        position: "top-left",
        transition: "slideInUp",
        icon: "",
        sound: true,
      });
    }
  }
  return (
    <Button
      className="flex-1 bg-[#6d432d] text-[#fff5eb] shadow-[0_8px_20px_rgba(90,53,35,0.15)] hover:bg-[#7b4f36] hover:-translate-y-0.5 transition-all"
      onClick={addToCart}
    >
      {children}
    </Button>
  );
}
