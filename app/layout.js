import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RiseQuote - Daily Inspirational Quotes",
  description: "Discover inspiring quotes to motivate and uplift your day. Get random motivational quotes from famous authors, thinkers, and leaders.",
  keywords: "quotes, inspiration, motivation, daily quotes, wisdom, famous quotes, motivational quotes",
  authors: [{ name: "RiseQuote Team" }],
  creator: "RiseQuote",
  publisher: "RiseQuote",
  robots: "index, follow",
  openGraph: {
    title: "RiseQuote - Daily Inspirational Quotes",
    description: "Discover inspiring quotes to motivate and uplift your day. Get random motivational quotes from famous authors, thinkers, and leaders.",
    url: "https://risequote.vercel.app",
    siteName: "RiseQuote",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RiseQuote - Daily Inspirational Quotes",
    description: "Discover inspiring quotes to motivate and uplift your day. Get random motivational quotes from famous authors, thinkers, and leaders.",
    creator: "@risequote",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://risequote.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
