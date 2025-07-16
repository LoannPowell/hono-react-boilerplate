import { createFileRoute } from '@tanstack/react-router'
import Login from '../components/Login'
import Register from '../components/Register'
import { signIn, signUp, useSession } from '../lib/auth-client'

export const Route = createFileRoute('/')({
  component: Index,
})



function Index() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex flex-col gap-12 justify-center items-center h-screen w-screen">
      <Login onLogin={signIn} />
      <Register onRegister={signUp} />
    </div>
  )
}