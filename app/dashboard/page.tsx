import { getServerSession } from 'next-auth/next';
import { authOptions } from '@app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=%2Fdashboard');
  }

  return <h2>Welcome to dashboard</h2>;
}
