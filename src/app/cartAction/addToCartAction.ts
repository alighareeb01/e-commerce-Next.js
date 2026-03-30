"use server";
import getMyToken from "../utils/getMyToken";
export default async function addToCartAction(productId: string, qty: number) {
  const token = await getMyToken();
  if (!token) {
    return false;
  }

  try {
    const res = await fetch(
      "https://nti-e-commerce-backend-project.vercel.app/api/v1/carts",
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
  } catch (error) {
    console.error(error);
  }
}
