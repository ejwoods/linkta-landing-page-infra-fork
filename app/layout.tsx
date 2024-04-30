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
      <body className='max-w-full h-screen bg-[#F5F5F5]'>
        <header className="xl:h-12 bt-4 hidden">
          <LinktaLogoWithText />
        </header>
        <MantineProvider>
          <main className="container my-auto h-5/6 xl:mx-auto mb-6 overflow-x-clip sm:overflow-x-visible xl:overflow-x-clip xl:overflow-y-visible">
            {children}
          </main>
        </MantineProvider>
        <footer className="hidden">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
