import Mainwrapper from '@/components/main-wrapper';
import Navbar from '@/components/nav-bar';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spack_grotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inspiritus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spack_grotesk.className}>
        <Mainwrapper>
          <Navbar />
          {children}
        </Mainwrapper>
      </body>
    </html>
  );
}
