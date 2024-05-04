'use client'

import Link from "next/link"

import { useSession, signOut } from "next-auth/react"
import Image from "next/image"

const DashboardHeader = () => {
  const { data: session, status } = useSession()

  return (
    <header className="bg-sky-700 text-white py-4 px-6 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <Link href="/dashboard">
          <h1 className="font-bold">NextAuth Credentials</h1>
        </Link>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <div className="flex items-center gap-4 ">
                <Image
                  className="rounded-full bg-white"
                  src={session?.user.avatar}
                  width="30"
                  height="30"
                  alt={session?.user.email}
                />
                <span>Hi, {session ? session?.user.email : 'Anon'}</span>
                <button onClick={() => signOut()} className="text-red-500">Logout</button>
              </div>
            </>
          ): (
            <>
              <Link href="/">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader