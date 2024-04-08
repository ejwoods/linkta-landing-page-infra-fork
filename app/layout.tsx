import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

const inter = Inter({ subsets: ['latin'], display: 'swap'});

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
      <body className={inter.className}>
         <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
