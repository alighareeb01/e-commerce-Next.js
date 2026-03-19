"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters"),
});

export default function Login() {
  let [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function loginFun(data) {
    setIsLoading(true);
    // console.log(data);
    try {
      const res = await axios.post(
        "https://nti-ecommerce.vercel.app/api/v1/auth/signIn",
        data,
      );

      console.log(res.data);
      localStorage.setItem("loginToken", res.data.token);
    } catch (err) {
      console.log(err.response?.data || err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdf6f0] px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-[#7a5036]/15 bg-[rgba(255,248,240,0.9)] p-8 shadow-[0_20px_60px_rgba(90,53,35,0.1)] backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-center text-[#4a2d1e] mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(loginFun)} className="flex flex-col gap-4">
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
              "login "
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
