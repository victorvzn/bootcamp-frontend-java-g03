import NextAuth from "next-auth";

import Credentials from 'next-auth/providers/credentials'
// import GitHub from 'next-auth/providers/github'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize (credentials, req) {
        // Aquí es donde haremos el llamado al endpoint de autenticación

        console.log(credentials)
      }
    })
  ]
})