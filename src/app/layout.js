import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { CurrencyProvider } from "./context/CurrencyContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Excellent Transport Service - Bali Transportation Services",
  description: "Professional transportation services in Bali. Airport transfers, private tours, and reliable transport solutions. Book your safe and comfortable journey today.",
  keywords: "Bali transport, airport transfer, private driver, Bali transportation, reliable transport, Bali driver, safe transport, comfortable travel",
  authors: [{ name: "Excellent Transport Service" }],
  creator: "Excellent Transport Service",
  publisher: "Excellent Transport Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Excellent Transport Service - Bali Transportation Services",
    description: "Professional transportation services in Bali. Airport transfers, private tours, and reliable transport solutions. Book your safe and comfortable journey today.",
    url: 'https://your-domain.com',
    siteName: 'Excellent Transport Service',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Excellent Transport Service - Bali Transportation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Excellent Transport Service - Bali Transportation Services",
    description: "Professional transportation services in Bali. Airport transfers, private tours, and reliable transport solutions. Book your safe and comfortable journey today.",
    images: ['/images/og-image.jpg'],
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
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f766e" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CurrencyProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex flex-col">
            <Header />
            <main>{children}</main>
            <Analytics />
            <Footer />
          </div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
