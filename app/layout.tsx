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
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-dark-900 text-gray-100 antialiased selection:bg-brand-500 selection:text-white">
        <ApplyModalProvider>
          <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
          <ApplyModal />
        </ApplyModalProvider>
      </body>
    </html>
  );
}
