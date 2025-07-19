import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Djolo - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Djolo' }],
  creator: 'Djolo',
  publisher: 'Djolo',
  openGraph: {
    title: 'Djolo - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies',
    url: 'https://samodjolo.github.io',
    siteName: "Djolo's Portfolio",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Djolo - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies',
    creator: '@samodjolo',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}