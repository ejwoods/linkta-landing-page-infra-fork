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
    <html lang="en"> {/* Used to manually toggle darkmode */}
      <head>
        <ColorSchemeScript />
      </head>
      <body className="w-10/12 min-w-[200px] sm:w-full flex flex-col m-auto p-2 sm:px-0 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
        <MantineProvider>
          <header className="hidden sm:block sm:pl-10">
            <LinktaLogoWithText />
          </header>
          <main className="flex flex-col my-3">{children}</main>
          <footer className="hidden text-xs sm:flex sm:flex-col border-t w-[100vw] border-t-light-text dark:border-t-dark-text">
            <Footer />
          </footer>
        </MantineProvider>
      </body>
    </html>
  );
}
