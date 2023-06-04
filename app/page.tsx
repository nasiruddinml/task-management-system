'use client';
import Button from '@components/atoms/Button/Button';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <Button className="link" onClick={() => router.push('/dashboard')}>
        Go to dashboard
      </Button>
    </main>
  );
}
