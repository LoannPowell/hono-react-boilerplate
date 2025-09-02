import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { getSession } from '@/lib/auth-client';

export const Route = createFileRoute('/__authenticated')({
  beforeLoad: async () => {
    const session = await getSession();
    if (!session.data) {
      throw redirect({
        to: '/login',
        search: {
          redirect: '/dashboard',
        },
      });
    }
  },
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  return <Outlet />;
}
