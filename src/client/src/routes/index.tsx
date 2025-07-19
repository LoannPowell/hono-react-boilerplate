import { createFileRoute } from '@tanstack/react-router'
import Login from '../components/login'
import Register from '../components/register'
import { forgetPassword, signIn, signOut, signUp  } from '../lib/auth-client'
import { useSession } from '../lib/auth-client'

export const Route = createFileRoute('/')({
  component: Index,
})

const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const email = (e.target as HTMLFormElement).email.value;
  await forgetPassword({
    email: email,
    redirectTo: '/reset-password',
  })
}

function Index() {
  const user = useSession();
  console.log(user);
  return (
    <div className="flex flex-col gap-12 justify-center items-center h-screen w-screen">
      <Login onLogin={signIn} />
      <Register onRegister={signUp} />
      <form onSubmit={handleResetPassword}>
        <input type="email" name="email" />
        <button type="submit">Reset Password</button>
        <button onClick={() => {
          signOut()
        }}>Sign out</button>
      </form>
    </div>
  )
}