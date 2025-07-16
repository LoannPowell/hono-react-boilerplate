import { createFileRoute } from '@tanstack/react-router'
import Login from '../components/login'
import Register from '../components/register'
import { signIn, signUp  } from '../lib/auth-client'

export const Route = createFileRoute('/')({
  component: Index,
})



function Index() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center h-screen w-screen">
      <Login onLogin={signIn} />
      <Register onRegister={signUp} />
    </div>
  )
}