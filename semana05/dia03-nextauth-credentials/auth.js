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

        // console.log(credentials)
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        }

        const response = await fetch(`${API_URL}/auth/login`, options)

        const user = await response.json()

        console.log(user)

        if (!response.ok) return user

        return user
      }
    })
  ]
})