import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Mariano López - Desarrollador Frontend',
    template: '%s | Mariano López - Desarrollador Frontend'
  },
  description: 'Portfolio profesional de Mariano López, desarrollador frontend especializado en React, Next.js y TypeScript. Descubre mis proyectos y experiencia.',
  keywords: ['desarrollador', 'frontend', 'react', 'nextjs', 'typescript', 'portfolio', 'web development'],
  authors: [{ name: 'Mariano López' }],
  creator: 'Mariano López',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://mariano-portfolio.com',
    title: 'Mariano López - Desarrollador Frontend',
    description: 'Portfolio profesional de Mariano López, desarrollador frontend especializado en React, Next.js y TypeScript.',
    siteName: 'Mariano López Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariano López - Desarrollador Frontend',
    description: 'Portfolio profesional de Mariano López, desarrollador frontend especializado en React, Next.js y TypeScript.',
    creator: '@marianolopez',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
