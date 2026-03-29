import { Button } from "@/components/ui/button";

import React from "react";
import addToWishlistAction from "../wishlistAction/addToWishlistAction";
type ADdtoWushlistProps = {
  productId: string;
  children: React.ReactNode;
};

export default function AddToWishlistButton({
  productId,
  children,
}: ADdtoWushlistProps) {
  async function addToWishlist() {
    const data = await addToWishlistAction(productId);
    console.log(data);
  }
  return (
    <Button
      variant="outline"
      size="icon"
      className="shrink-0 border border-[#7a5036]/20 text-[#6d432d] bg-[rgba(255,248,240,0.9)] hover:bg-[#f3e1d3] hover:text-[#7b4f36] hover:border-[#7a5036]/30 transition-all"
      onClick={addToWishlist}
    >
      {children}
    </Button>
  );
}
