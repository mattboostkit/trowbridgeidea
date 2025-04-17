import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/ui/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://trowbridgegallery.co.uk'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Trowbridge Gallery', url: 'https://trowbridgegallery.co.uk' }],
  generator: 'Next.js',
  applicationName: 'Trowbridge Gallery',
  referrer: 'origin-when-cross-origin',
  creator: 'Trowbridge Gallery',
  publisher: 'Trowbridge Gallery',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} max-w-[1920px] mx-auto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}