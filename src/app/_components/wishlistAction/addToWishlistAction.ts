"use server";

import getMyToken from "@/app/utils/getMyToken";

export default async function addToWishlistAction(productId: string) {
  const token = await getMyToken();
    if (!token) {
      return false;
    }
  const res = await fetch(
    "https://nti-e-commerce-backend-project.vercel.app/api/v1/wishlist",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product: productId,
      }),
    },
  );
  const data = await res.json();
  console.log(data);
}
