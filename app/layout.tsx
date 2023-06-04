import '@styles/globals.css';
import { Inter, Lora } from 'next/font/google';
import { Providers } from '@components/molecules/Providers/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
