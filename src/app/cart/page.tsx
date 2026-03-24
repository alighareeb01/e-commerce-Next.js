import { getServerSession } from "next-auth";
import React from "react";

export default async function cart() {
  const session = await getServerSession();
  console.log(session, "a");

  return <div>cart</div>;
}
