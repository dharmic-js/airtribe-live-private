import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ApplyModalProvider } from '@/components/ApplyModalContext';
import { ApplyModal } from '@/components/ApplyModal';

export const metadata: Metadata = {
  title: 'Airtribe - Learn from top industry practitioners',
  description: 'Airtribe is a learning community that helps people become confident, AI-fluent product builders. 360° cohort-based learning.',
  icons: {
    icon: '/airtribe-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth bg-black">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased selection:bg-[#585DFF] selection:text-white min-h-screen flex flex-col justify-between">
        <ApplyModalProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ApplyModal />
        </ApplyModalProvider>
      </body>
    </html>
  );
}
