import React from 'react'
import { currentUser } from '../data/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await currentUser();

  if(!user) {
    redirect("/login")
  }

  console.log(user);
  
  
  return (
    <div className='p-6'>
      <h1>mypage</h1>
    </div>
  )
}
