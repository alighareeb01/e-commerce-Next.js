import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/auth";

export default async function cart() {
  const session = await getServerSession(authOptions);
  console.log(session, "a");

  return <div>cart</div>;
}
