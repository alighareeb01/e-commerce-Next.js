import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface DecodedToken {
  email: string;
  name: string;
  id: string;
  role: string;
  iat: number;
}
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "credentails",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        //fetching
        const res = await fetch(
          "https://nti-ecommerce.vercel.app/api/v1/auth/signIn",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          },
        );
        const data = await res.json();
        // return null;
        let decodedToken = jwtDecode(data.token);
        if (data.message == "success") {
          //
          return {
            token: data.token,
            user: decodedToken,
            id: decodedToken.id,
          };
        } else {
          throw new Error("invalid credientaiasd");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = (user as any).token;
        token.user = (user as any).user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session as any).user = (token as any).user;
        (session as any).token = (token as any).token;
      }
      return session;
    },
  },
};
