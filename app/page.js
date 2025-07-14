import AnimeQuote from "./quote/page";

export const metadata = {
  title: "RiseQuote - Inspirational Quotes to Brighten Your Day",
  description: "Get motivated with our collection of inspiring quotes. Discover wisdom from great minds and leaders. Perfect for daily motivation and personal growth.",
  alternates: {
    canonical: "https://risequote.vercel.app",
  },
};

export default function Home() {
  return (
    <main>
      <AnimeQuote />
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm">
        © 2025 RiseQuote. All rights reserved.
      </footer>
    </main>
  );
}