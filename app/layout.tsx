import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/layout/Footer';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';


export const metadata: Metadata = {
  title: 'Linkta',
  description: 'Revolutionize your learning',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className='max-w-full h-svh'>
        <header className="h-1/6">
          <LinktaLogoWithText />
        </header>
        <MantineProvider>
          <main className="container h-5/6">
            {children}
          </main>
        </MantineProvider>
        <footer className="hidden text-xs sm:flex sm:flex-col border-t mb-2 border-t-light-text dark:border-t-dark-text">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
