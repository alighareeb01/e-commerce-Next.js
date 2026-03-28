"use server";

import { revalidatePath } from "next/cache";
import getMyToken from "../utils/getMyToken";

export default async function clearFromCartAction() {
  const token = await getMyToken();

  const res = await fetch(
    "https://nti-e-commerce-backend-project.vercel.app/api/v1/carts",
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to clear cart");
  }

  return true;
}
