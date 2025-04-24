import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Font configuration - simplified to just use Inter
const inter = Inter({ subsets: ['latin'] });

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    default: 'Zobli Innovations Pvt Ltd | Innovative Tech Solutions',
    template: '%s | Zobli Innovations',
  },
  description: 'Zobli Innovations provides cutting-edge technology solutions to businesses of all sizes. Our services include software development, AI solutions, and digital transformation.',
  keywords: ['Zobli', 'tech innovations', 'software development', 'AI solutions', 'digital transformation'],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-dark-800 to-dark-900 text-white`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}