import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "e044bfb6ba6ab1dfd055",
      clientSecret: "a228791c89b771d05eef07abb2c070ef0803e30b",
    }),
  ],
  secret: "qwer1234",
};
export default NextAuth(authOptions);
