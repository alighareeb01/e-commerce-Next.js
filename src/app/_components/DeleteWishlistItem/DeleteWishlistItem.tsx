"use client";
import deleteFromWishListAction from "@/app/cartAction/deleteFromWishListAction";
import { Button } from "@/components/ui/button";
import React from "react";
export default function DeleteWishlistItem({ itemId }) {
  async function handleDelete() {
    await deleteFromWishListAction(itemId);
    window.location.href = "/wishlist";
  }
  return (
    <Button
      onClick={handleDelete}
      className="flex-1 bg-[#6d432d] text-[#fff5eb] shadow-[0_8px_20px_rgba(90,53,35,0.15)] hover:bg-[#7b4f36] hover:-translate-y-0.5 transition-all"
    >
      delete from wishlist
    </Button>
  );
}
