import { Button } from "@/components/ui/button";

import React from "react";
import addToWishlistAction from "../wishlistAction/addToWishlistAction";
import { showToast } from "nextjs-toast-notify";
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
    // console.log(data);
    if (data == false) {
      showToast.info("please login first and come back", {
        duration: 4000,
        progress: true,
        position: "top-left",
        transition: "bounceIn",
        icon: "",
        sound: true,
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 4000);
    } else {
      showToast.success("added to wishlist successfully", {
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
      variant="outline"
      size="icon"
      className="shrink-0 border border-[#7a5036]/20 text-[#6d432d] bg-[rgba(255,248,240,0.9)] hover:bg-[#f3e1d3] hover:text-[#7b4f36] hover:border-[#7a5036]/30 transition-all"
      onClick={addToWishlist}
    >
      {children}
    </Button>
  );
}
