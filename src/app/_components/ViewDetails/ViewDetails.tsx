"use client";
import { Button } from "@/components/ui/button";
import React from "react";
type PlaceOrderButtonProps = {
  productId: string;
  children: React.ReactNode;
};

export default function ViewDetails({
  productId,
  children,
}: PlaceOrderButtonProps) {
  //

  function goToCheckout() {
    window.location.href = `/productdetails?productId=${productId}`;
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
