'use client'

import { useState } from "react"

import { useRouter } from "next/navigation"

import { signIn, useSession, signOut } from 'next-auth/react'
import Link from "next/link"

const LoginFormCredencials = () => {
  const { data: session, status } = useSession()

  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async (event) => {
    event.preventDefault();

    const responseNextAuth = await signIn('credentials', {
      ...form,
      redirect: false
    })

    console.log(responseNextAuth)

    // DONE: Redirección a la ruta /dashboard

    router.push('/dashboard')
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-4xl font-semibold">Login</h1>
        <p className="text-sm text-slate-600">Enter your email below to login your account.</p>
      </div>

      <form
        className="flex flex-col gap-2"
        onSubmit={handleLogin}
      >
        <label className="font-bold">Email</label>
        <input
          className="border p-3 shadow-sm text-black"
          type="text"
          placeholder="jhon@doe.com"
          onChange={event => setForm(prev => ({ ...prev, email: event.target.value }))}
          value={form.email}
        />

        <label className="font-bold">Password</label>
        <input
          className="border p-3 shadow-sm text-black"
          type="password"
          placeholder="mipass"
          onChange={event => setForm(prev => ({ ...prev, password: event.target.value }))}
          value={form.password}
        />

        <input
          className="border p-3 bg-sky-700 text-white rounded-md hover:bg-sky-800 duration-300"
          type="submit"
          value="Login"
        />

        {/* {JSON.stringify(form)} */}

        {/* {session?.user && (
          <div>
            <span>Hola {session.user.email}</span>
            <img src={session.user.avatar} className="w-11" />
            <button onClick={() => signOut()} className="text-red-500">Logout</button>
          </div>
        )} */}

        {/* {status} */}

        {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      </form>

      <div className="flex justify-center gap-2 font-bold">
        <span>Don't have an account?</span>
        <Link
          href="/register"
          className="text-sky-500"
        >Register</Link>
      </div>
    </div>
  )
}

export default LoginFormCredencials