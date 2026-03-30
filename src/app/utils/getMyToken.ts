import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function () {
  const encToken = (await cookies()).get("next-auth.session-token")?.value;


if (!encToken) return null;

const decToken = await decode({
  token: encToken,
  secret: process.env.NEXTAUTH_SECRET!,
});

if (!decToken) return null;

return decToken.token ?? null;
}
