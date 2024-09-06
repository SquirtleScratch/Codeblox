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
        async signIn({ user }):Promise<boolean>{
            //checks if user exists in DB
            let retUser = await getUser(user.email as string);
            //if not, create user in DB
            if(retUser.message){
                retUser = await postUser(user.email as string, user.id)
            }
            //allow signin
            if(await retUser.useremail){
                return true;
            }
            //if error, do not allow signin
            return false;
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    session: {
    }
};