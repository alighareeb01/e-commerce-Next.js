"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import PlaceOrderAction from "@/app/cartAction/PlcaeOrderAction";

export const checkoutSchema = z.object({
  shippingAddress: z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),

    phone: z
      .string()
      .min(6, "Phone number is too short")
      .max(20, "Phone number is too long"),

    addressLine1: z.string().min(5, "Address must be at least 5 characters"),

    city: z.string().min(2, "City is required"),

    country: z.string().length(2, "Country must be ISO code (e.g., EG)"),
  }),

  paymentMethod: z
    .string()
    .min(2, "Payment method must be at least 2 characters"),

  notes: z
    .string()
    .max(500, "Notes must be less than 500 characters")
    .optional(),
});
type CartItemType = {
  productId: string;
  quantity: number;
  price: number;
};

type CartType = {
  id: string;
  userId: string;
  items: CartItemType[];
  total: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type CheckoutFormProps = {
  cart: CartType;
};

export default function CheckoutForm({ cart }: CheckoutFormProps) {
  //   const token = await getMyToken();
  console.log("cart from login", cart);

  let [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shippingAddress: {
        fullName: "",
        phone: "",
        addressLine1: "",
        city: "",
        country: "",
      },
      paymentMethod: "",
      notes: "",
    },
    resolver: zodResolver(checkoutSchema),
  });

  async function SubmitFun(data: any) {
    console.log(data);

    setIsLoading(true);
    const body = {
      items: cart.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
      })),
      shippingAddress: data.shippingAddress,
      paymentMethod: data.paymentMethod,
      notes: data.notes,
    };

    const result = await PlaceOrderAction(body);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    window.location.href = "/allorders";
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdf6f0] px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-[#7a5036]/15 bg-[rgba(255,248,240,0.9)] p-8 shadow-[0_20px_60px_rgba(90,53,35,0.1)] backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-center text-[#4a2d1e] mb-6">
          please fill your detatils
        </h2>

        <form
          onSubmit={handleSubmit(SubmitFun)}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#7b5843]">fullname</label>
              <input
                type="text"
                className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
                {...register("shippingAddress.fullName")}
              />
              {errors?.shippingAddress?.fullName && (
                <p className="text-xs text-red-500">
                  {errors.shippingAddress?.fullName?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#7b5843]">phone</label>
              <input
                type="text"
                className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
                {...register("shippingAddress.phone")}
              />
              {errors?.shippingAddress?.phone && (
                <p className="text-xs text-red-500">
                  {errors.shippingAddress?.phone?.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#7b5843]">addressLine1</label>
              <input
                type="text"
                className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
                {...register("shippingAddress.addressLine1")}
              />
              {errors?.shippingAddress?.addressLine1 && (
                <p className="text-xs text-red-500">
                  {errors.shippingAddress?.addressLine1?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#7b5843]">city</label>
              <input
                type="text"
                className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
                {...register("shippingAddress.city")}
              />
              {errors?.shippingAddress?.city && (
                <p className="text-xs text-red-500">
                  {errors.shippingAddress?.city?.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#7b5843]">country</label>
              <input
                type="text"
                className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
                {...register("shippingAddress.country")}
              />
              {errors?.shippingAddress?.country && (
                <p className="text-xs text-red-500">
                  {errors.shippingAddress?.country?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#7b5843]">paymentMethod</label>
              <input
                type="text"
                className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
                {...register("paymentMethod")}
              />
              {errors?.paymentMethod && (
                <p className="text-xs text-red-500">
                  {errors.paymentMethod?.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#7b5843]">notes</label>
            <input
              type="text"
              className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
              {...register("notes")}
            />
            {errors?.notes && (
              <p className="text-xs text-red-500">{errors.notes?.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`mt-3 rounded-full py-2 text-[#fff5eb] shadow-md transition-all 
  ${
    isLoading
      ? "bg-[#a18672] cursor-not-allowed"
      : "bg-[#6d432d] hover:bg-[#7b4f36] hover:-translate-y-0.5"
  }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-[#fff5eb] border-t-transparent rounded-full animate-spin"></span>
                loggin in...
              </span>
            ) : (
              "submit your order "
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
