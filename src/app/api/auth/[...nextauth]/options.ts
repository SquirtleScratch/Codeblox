import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GCLIENT_ID as string,
            clientSecret: process.env.GCLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "password"
                }
            },
            async authorize(credentials){
                //insert database call here to verify user
                const user = { id: '22', name: "Josh", password: "testing" };

                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
          return url.startsWith(baseUrl) ? url : baseUrl
        },
    },
    session: {}
};