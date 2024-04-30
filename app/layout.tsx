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
      <body className='max-w-full h-full bg-[#F5F5F5]'>
        <header className="hidden">
          <LinktaLogoWithText />
        </header>
        <MantineProvider>
          <main className="relative container my-auto xl:mx-auto overflow-x-clip sm:overflow-x-visible xl:overflow-x-clip xl:overflow-y-visible">
            {children}
          </main>
        </MantineProvider>
        <footer className="absolute border-t-2 w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
