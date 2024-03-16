import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Ian Frye | Full Stack Developer From North Carolina.';
const description =
  'A self-proclaimed designer who specializes in full stack development (React.js & Node.js), from North Carolina.';
const url = 'https://wifrye.net';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ['Frontend Developer', 'Full Stack Developer', 'React Developer', 'Next.js Developer'],
  creator: 'Ian Frye',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='!scroll-smooth'
      suppressHydrationWarning
    >
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className='flex min-h-screen w-full flex-col'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
