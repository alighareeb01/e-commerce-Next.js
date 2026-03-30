"use client";
import { Button } from "@/components/ui/button";
import { showToast } from "nextjs-toast-notify";
import React from "react";
type PlaceOrderButtonProps = {
  cartId: string;
  children: React.ReactNode;
};

export default function PlaceOrderButton({
  children,
  cartId,
}: PlaceOrderButtonProps) {
  //

  function goToCheckout() {
    showToast.success("going to checkout", {
      duration: 4000,
      progress: true,
      position: "top-left",
      transition: "slideInUp",
      icon: "",
      sound: true,
    });
    setTimeout(() => {
      window.location.href = `/checkout?cartId=${cartId}`;
    }, 4000);
  }
  return (
    <Button
      className="flex-1 bg-[#6d432d] text-[#fff5eb] shadow-[0_8px_20px_rgba(90,53,35,0.15)] hover:bg-[#7b4f36] hover:-translate-y-0.5 transition-all"
      onClick={goToCheckout}
    >
      {children}
    </Button>
  );
}
