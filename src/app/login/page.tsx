import { signIn, signOut } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import React from 'react'
import { currentUser } from '@/app/data/auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const user = await currentUser()

  if (user) redirect("/mypage")

  return (
    <div className='p-6'>
      <h1>Login</h1>

        <form action={signIn}>
          <Button>signIn</Button>
        </form>
    </div>
  )
}
