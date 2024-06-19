import { signIn } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import React from 'react'
import { currentUser } from '@/app/data/auth'

export default async function Page() {
  const user = await currentUser()

  return (
    <div className='p-6'>
      <h1>Login</h1>

      {user && JSON.stringify(user)}
      
      <form action={signIn}>
        <Button>Login</Button>
      </form>
    </div>
  )
}
