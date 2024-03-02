import 'src/app/globals.css';

import type { Metadata } from 'next';
import { Mouse_Memoirs } from 'next/font/google';
import StyledCacheProvider from 'src/providers/StyledCacheProvider';

const mouseMemoirs = Mouse_Memoirs({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Hangman Game',
  description: 'Classic word guessing game: outsmart the hangman with your word skills!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mouseMemoirs.className}>
        <StyledCacheProvider>{children}</StyledCacheProvider>
      </body>
    </html>
  );
}
