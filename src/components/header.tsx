import { Button } from './ui/button'
import { currentUser } from '@/app/data/auth'
import { signIn, signOut } from '@/actions/auth';
import Link from 'next/link';

export default async function Header() {
  const user = await currentUser();

  return (
    <header className="h-16 border-b px-6 flex items-center gap-3">
      <Button asChild variant={"ghost"} className="font-bold text-xl">
        <Link href="/">Header</Link>
      </Button>
      <Button asChild variant={"ghost"} className="font-bold text-xl">
        <Link href="/about">About</Link>
      </Button>
      <Button asChild variant={"ghost"} className="font-bold text-xl">
        <Link href="/mypage">Mypage</Link>
      </Button>

      <span className='flex-1'></span>
      {user ? (
        <form action={signOut}>
          <Button variant={"outline"}>LogOut</Button>
        </form>
      ) : (
        <Button asChild>
          <Link href={"/login"}>Login</Link>
        </Button>
      )}
    </header>
  )
}
