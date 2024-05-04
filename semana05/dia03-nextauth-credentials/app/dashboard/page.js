'use client'

import { useSession, signOut } from 'next-auth/react'

const DashboardPage = () => {
  const { data: session, status } = useSession()

  return (
    <div>
      <div>DashboardPage</div>

      {session?.user && (
        <div>
          <span>Hola {session.user.email}</span>
          <img src={session.user.avatar} className="w-11" />

          <button onClick={() => signOut()} className="text-red-500">Logout</button>
        </div>
      )}
    </div>
  )
}

export default DashboardPage