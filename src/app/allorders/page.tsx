import React from "react";
import getMyToken from "../utils/getMyToken";

type OrderCartItemType = {
  _id?: string;
  quantity: number;
  price: number;
  product?: {
    _id?: string;
    name?: string;
    cover?: string;
  };
};

type OrderType = {
  _id: string;
  cartItems: OrderCartItemType[];
  totalPrice: number;
  paymentMethod: string;
  isDelivered: boolean;
  isPaid: boolean;
  taxPrice: number;
  createdAt: string;
  updatedAt: string;
  user: {
    _id: string;
    name: string;
    email: string;
    image?: string;
  };
};

type OrdersResponseType = {
  length: number;
  data: OrderType[];
};

export default async function Orders() {
  const token = await getMyToken();

  const res = await fetch(
    "https://nti-e-commerce-backend-project.vercel.app/api/v1/orders",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  );
  const orders: OrdersResponseType = await res.json();

  return (
    <section className="min-h-screen bg-[#fdf6f0] px-4 py-10 text-[#3f2417]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#4a2d1e]">
              All Orders
            </h1>
            <p className="mt-2 text-sm text-[#7b5843]">
              {orders.length} order{orders.length === 1 ? "" : "s"} found
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {orders.data.map((order) => (
            <article
              key={order._id}
              className="rounded-[2rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.88)] p-6 shadow-[0_20px_60px_rgba(90,53,35,0.08)]"
            >
              <div className="flex flex-col gap-4 border-b border-[#7a5036]/10 pb-5 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-[#4a2d1e]">
                    Order #{order._id}
                  </h2>
                  <p className="text-sm text-[#7b5843]">
                    Customer: {order.user.name} ({order.user.email})
                  </p>
                  <p className="text-sm text-[#7b5843]">
                    Placed: {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#fff5eb] px-4 py-3 text-sm text-[#7b5843]">
                    Total:{" "}
                    <span className="font-semibold text-[#4a2d1e]">
                      ${order.totalPrice - 100}
                    </span>
                  </div>
                  <div className="rounded-2xl bg-[#fff5eb] px-4 py-3 text-sm text-[#7b5843]">
                    Payment:{" "}
                    <span className="font-semibold capitalize text-[#4a2d1e]">
                      {order.paymentMethod}
                    </span>
                  </div>
                  <div className="rounded-2xl bg-[#fff5eb] px-4 py-3 text-sm text-[#7b5843]">
                    Paid:{" "}
                    <span className="font-semibold text-[#4a2d1e]">
                      {order.isPaid ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="rounded-2xl bg-[#fff5eb] px-4 py-3 text-sm text-[#7b5843]">
                    Delivered:{" "}
                    <span className="font-semibold text-[#4a2d1e]">
                      {order.isDelivered ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="mb-3 text-lg font-semibold text-[#4a2d1e]">
                  Items
                </h3>

                <div className="grid gap-3">
                  {order.cartItems.map((item, index) => (
                    <div
                      key={item._id ?? `${order._id}-${index}`}
                      className="flex items-center justify-between rounded-2xl bg-[#fff5eb] px-4 py-3"
                    >
                      <div>
                        <p className="font-medium text-[#4a2d1e]">
                          {item.product?.name ?? "Product"}
                        </p>
                        <p className="text-sm text-[#7b5843]">
                          Product ID: {item.product?._id ?? "N/A"}
                        </p>
                      </div>

                      <div className="text-right text-sm text-[#7b5843]">
                        <p>Qty: {item.quantity}</p>
                        <p className="font-semibold text-[#4a2d1e]">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
