import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GitlabProvider from "next-auth/providers/gitlab";


// Define the types for clientId and clientSecret
type ClientId = string;
type ClientSecret = string;

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as ClientId,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as ClientSecret,
    }),
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID as ClientId,
      clientSecret: process.env.GITLAB_CLIENT_SECRET as ClientSecret
    }),
  ],
});

export { handler as GET, handler as POST };
