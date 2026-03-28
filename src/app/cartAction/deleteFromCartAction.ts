"use server";
import getMyToken from "../utils/getMyToken";
export default async function deleteFromCartAction(cartItemId: string) {
  const token = await getMyToken();
  const res = await fetch(
    `https://nti-e-commerce-backend-project.vercel.app/api/v1/carts/${cartItemId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return await res.json();
}
