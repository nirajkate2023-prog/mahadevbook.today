import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Betting Glossary – A to Z Cricket & Sports Betting Terms",
  description:
    "Learn the meaning of common betting terms like khai lagai, session betting, fancy bet, odds, and more in our comprehensive A-Z betting glossary.",
  alternates: {
    canonical: "https://mahadevbooks.today/betting-glossary/",
  },
  openGraph: {
    title: "Betting Glossary – Understand Cricket Betting Terminology",
    description:
      "A complete A to Z dictionary of betting terms, covering everything from basic odds to advanced fancy betting markets in India.",
    url: "https://mahadevbooks.today/betting-glossary/",
    type: "article",
  },
};

export default function BettingGlossary() {
  const glossaryTerms = [
    {
      term: "Accumulator (Acca)",
      definition: "A single bet that links together two or more individual wagers. All selections must win for the bet to be successful, resulting in higher potential payouts.",
    },
    {
      term: "Back",
      definition: "To bet on an outcome to happen (e.g., backing India to win).",
    },
    {
      term: "Bankroll",
      definition: "The total amount of money a bettor has set aside specifically for betting.",
    },
    {
      term: "Bookmaker (Bookie)",
      definition: "An organization or person that takes bets, sets odds, and pays out winnings.",
    },
    {
      term: "Cash Out",
      definition: "A feature allowing bettors to settle their bet before the event has finished, either to secure a profit or minimize a loss.",
    },
    {
      term: "Decimal Odds",
      definition: "Odds expressed as a decimal number (e.g., 2.50). Multiplying the stake by the decimal gives the total return (stake + profit).",
    },
    {
      term: "Draw No Bet (DNB)",
      definition: "A market where if the match ends in a draw, the stake is refunded.",
    },
    {
      term: "Evens (Even Money)",
      definition: "Odds of 2.00 (decimal) or 1/1 (fractional). A winning bet yields a profit exactly equal to the original stake.",
    },
    {
      term: "Fancy Bet",
      definition: "In Indian cricket betting, these are proposition bets on specific micro-events within a match, such as 'runs in the first 6 overs' or 'fall of first wicket'.",
    },
    {
      term: "In-Play (Live Betting)",
      definition: "Placing bets while a match or event is currently happening. Odds fluctuate dynamically based on the live action.",
    },
    {
      term: "Khai Lagai",
      definition: "A popular betting system in India. 'Lagai' means to 'back' a team to win. 'Khai' means to 'lay' or bet against a team winning.",
    },
    {
      term: "Lay",
      definition: "To bet against an outcome happening (e.g., laying a team means you win if they lose or draw).",
    },
    {
      term: "Nap",
      definition: "A tipster's most confident bet or best tip of the day.",
    },
    {
      term: "Odds",
      definition: "The numerical expression of the probability of an event occurring, determining the potential payout of a winning bet.",
    },
    {
      term: "Outright Bet",
      definition: "A bet placed on the overall winner of a tournament or competition, rather than a single match (e.g., betting on who will win the IPL).",
    },
    {
      term: "Over/Under",
      definition: "A bet on whether a specific statistic (like total runs in an innings) will be higher or lower than a line set by the bookmaker.",
    },
    {
      term: "Session Betting",
      definition: "Common in Indian cricket betting, this involves betting on the total runs scored in a specific block of overs (e.g., 1-6 overs, or 10-15 overs).",
    },
    {
      term: "Stake",
      definition: "The amount of money placed on a bet.",
    },
    {
      term: "Tipster",
      definition: "A person who provides betting tips or predictions, often claiming to have specialized knowledge.",
    },
    {
      term: "Value Bet",
      definition: "A bet where the bettor believes the probability of an outcome is greater than the odds suggest.",
    },
  ];

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Betting Glossary" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            A to Z Betting Glossary
          </h1>
          <p className="text-gray-400 text-sm mt-2">Understand the Language of Online Sports Betting</p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
            From "Accumulator" to "Value Bet", and including Indian market specifics like "Khai Lagai" and "Session Betting", our comprehensive glossary explains the essential terms you need to know before accessing the <Link href="/mahadev-book-online" className="text-gold hover:underline font-semibold">Mahadev Book Online platform</Link>.
          </p>
        </section>

        {/* Glossary Terms List */}
        <section className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="bg-[#0c0c0e] border border-gold/20 rounded-xl p-6 shadow-md hover:border-gold/50 transition-colors">
                <h2 className="text-xl font-bold text-gold mb-3">{item.term}</h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase">
            Ready to Apply Your Knowledge?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Now that you understand the terminology, learn more about strategies in our <Link href="/cricket-betting-guide" className="text-gold font-semibold hover:underline">Cricket Betting Guide</Link> or get started on the platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
              href="/mahadev-book-online"
              className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
            >
              Learn About the Platform
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
