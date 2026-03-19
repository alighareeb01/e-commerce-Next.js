"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { log } from "util";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters"),
});

export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function loginFun(data) {
    // console.log(data);
    try {
      const res = await axios.post(
        "https://nti-ecommerce.vercel.app/api/v1/auth/signIn",
        data,
      );

      console.log(res.data);
      localStorage.setItem("loginToken", res.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdf6f0] px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-[#7a5036]/15 bg-[rgba(255,248,240,0.9)] p-8 shadow-[0_20px_60px_rgba(90,53,35,0.1)] backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-center text-[#4a2d1e] mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(loginFun)} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#7b5843]">Email</label>
            <input
              type="email"
              className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
              {...register("email")}
            />
            {formState.errors.email && (
              <p className="text-xs text-red-500">
                {formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#7b5843]">Password</label>
            <input
              type="password"
              className="rounded-lg border border-[#7a5036]/20 bg-[#fff5eb] px-3 py-2 outline-none focus:border-[#6d432d]"
              {...register("password")}
            />
            {formState.errors.password && (
              <p className="text-xs text-red-500">
                {formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-3 rounded-full bg-[#6d432d] py-2 text-[#fff5eb] shadow-md transition-all hover:bg-[#7b4f36] hover:-translate-y-0.5"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
