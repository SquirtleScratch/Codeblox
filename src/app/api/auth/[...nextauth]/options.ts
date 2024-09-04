import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getUser, postUser } from "../../../../utils/fetch";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GCLIENT_ID as string,
            clientSecret: process.env.GCLIENT_SECRET as string
        }),
    ],
    callbacks: {
        async signIn({ user }){
            let retUser = await getUser(user.email);
            if(retUser.message){
                retUser = await postUser(user.email, user.id)
            }
            if(await retUser.useremail){
                return true;
            }
            return false;
        },
        async redirect({ baseUrl }) {
          return baseUrl
        },
    },
    session: {}
};