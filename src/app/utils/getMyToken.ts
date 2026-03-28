import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function () {
  const encToken = (await cookies()).get("next-auth.session-token")?.value;

  const decToken = await decode({
    token: encToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  return decToken.token;
}
