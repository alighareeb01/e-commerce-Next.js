"use server";

import getMyToken from "../utils/getMyToken";

type PlaceOrderBody = {
  items: {
    productId: string;
    quantity: number;
  }[];
  shippingAddress: {
    fullName: string;
    phone: string;
    addressLine1: string;
    city: string;
    country: string;
  };
  paymentMethod: string;
  notes?: string;
};

export default async function PlaceOrderAction(body: PlaceOrderBody) {
  const token = await getMyToken();

  const res = await fetch(
    "https://nti-e-commerce-backend-project.vercel.app/api/v1/orders",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  return res.json();
}
