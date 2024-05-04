'use client'

import { useState } from "react"

import { useRouter } from "next/navigation"

import { signIn, useSession, signOut } from 'next-auth/react'

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
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="text"
          placeholder="jhon@doe.com"
          onChange={event => setForm(prev => ({ ...prev, email: event.target.value }))}
          value={form.email}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="mipass"
          onChange={event => setForm(prev => ({ ...prev, password: event.target.value }))}
          value={form.password}
        />

        <input type="submit" value="Login" />

        {/* {JSON.stringify(form)} */}

        {session?.user && (
          <div>
            <span>Hola {session.user.email}</span>
            <img src={session.user.avatar} className="w-11" />
            <button onClick={() => signOut()} className="text-red-500">Logout</button>
          </div>
        )}

        {status}

        <pre>{JSON.stringify(session, null, 2)}</pre>
      </form>
    </div>
  )
}

export default LoginFormCredencials