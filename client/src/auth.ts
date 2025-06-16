
import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";


// auth: Helper to access the current authenticated user/session on the server
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async jwt({ token, account }) {
            if (account?.id_token) {
                token.idToken = account.id_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.sessionToken = String(token.idToken);
            return session;
        }
    }
})