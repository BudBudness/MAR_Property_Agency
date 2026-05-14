import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'MAR Property Agency | Uganda Land Verification',
    template: '%s | MAR Property Agency',
  },
  description:
    'MAR Property Agency helps locals and Ugandans abroad verify land ownership, reduce fraud risk, and make safer property decisions in Uganda.',
  keywords: [
    'Uganda land verification',
    'Mbarara land verification',
    'verify land title Uganda',
    'Uganda land fraud',
    'diaspora land buying Uganda',
    'MAR Property Agency',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
