"use client";

import clearFromCartAction from "@/app/cartAction/clearFromCartAction";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ClearCartButton() {
  const router = useRouter();
  async function handleClear() {
    await clearFromCartAction();
    router.refresh();
    // window.location.href = "/";
  }

  return (
    <Button
      onClick={() => {
        handleClear();
      }}
      className="flex-1 bg-[#6d432d] text-[#fff5eb] shadow-[0_8px_20px_rgba(90,53,35,0.15)] hover:bg-[#7b4f36] hover:-translate-y-0.5 transition-all"
    >
      clear cart
    </Button>
  );
}
