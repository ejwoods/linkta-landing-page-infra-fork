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
      <body className=" px-10">
        <MantineProvider>
          <header>
            <LinktaLogoWithText />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </MantineProvider>
      </body>
    </html>
  );
}
