import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cricket Betting Odds Explained & Calculator Guide | Mahadev Book",
  description:
    "Learn how to read cricket betting odds, calculate payouts, and understand implied probability with our comprehensive odds calculator guide.",
  alternates: {
    canonical: "https://mahadevbooks.today/odds-calculator-guide/",
  },
  openGraph: {
    title: "Cricket Betting Odds Explained & Calculator Guide",
    description:
      "A complete guide to understanding decimal and fractional odds in cricket betting.",
    url: "https://mahadevbooks.today/odds-calculator-guide/",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Cricket Betting Odds Explained",
      },
    ],
  },
};

export default function OddsCalculatorGuide() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Odds Calculator Guide" },
        ]}
      />
      <main className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gold font-heading leading-tight">
              Cricket Betting Odds Explained
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Master the math behind the game. Learn how to read decimal odds, calculate potential payouts, and find value in cricket betting markets.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4" />
          </div>

          {/* Intro */}
          <section className="bg-[#0c0c0e] border border-gold/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gold mb-4 font-heading border-l-4 border-gold pl-3">
              Why Understanding Odds is Critical
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Whether you are betting on the IPL or a T20 World Cup, understanding how betting odds work is the foundation of sports betting. Odds tell you two very important things:
            </p>
            <ul className="space-y-2 text-gray-200 pl-6 list-decimal font-semibold">
              <li>The <strong className="text-gold">implied probability</strong> (what the bookmaker thinks will happen).</li>
              <li>The <strong className="text-gold">potential payout</strong> (how much you stand to win).</li>
            </ul>
          </section>

          {/* Decimal Odds */}
          <section className="bg-[#0c0c0e] border border-gold/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gold mb-4 font-heading border-l-4 border-gold pl-3">
              How to Read Decimal Odds
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Decimal odds are the most popular format used in India and across Europe. They represent the total return you will receive for every ₹1 wagered, including your original stake.
            </p>
            
            <div className="bg-black/50 border border-gold/40 rounded-xl p-6 mb-6">
              <h3 className="text-white font-bold text-xl mb-3">The Formula:</h3>
              <p className="text-gold font-mono text-lg bg-black p-3 rounded text-center border border-gray-800">
                Total Payout = Stake × Decimal Odd
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Example Scenario: Mumbai Indians vs Chennai Super Kings</h3>
            <div className="overflow-x-auto rounded-xl border border-gold/20 mb-6">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-[#ffca61] text-black">
                  <tr>
                    <th className="p-4 font-bold">Team</th>
                    <th className="p-4 font-bold">Decimal Odds</th>
                    <th className="p-4 font-bold">Stake</th>
                    <th className="p-4 font-bold">Total Payout</th>
                  </tr>
                </thead>
                <tbody className="bg-black text-gray-200 divide-y divide-gray-800">
                  <tr>
                    <td className="p-4 font-semibold">Mumbai Indians</td>
                    <td className="p-4 text-gold">1.85</td>
                    <td className="p-4">₹1,000</td>
                    <td className="p-4 text-green-400 font-bold">₹1,850</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Chennai Super Kings</td>
                    <td className="p-4 text-gold">2.10</td>
                    <td className="p-4">₹1,000</td>
                    <td className="p-4 text-green-400 font-bold">₹2,100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 italic">
              Note: In the Mumbai Indians example, your total payout is ₹1,850, meaning your actual profit is ₹850 (Payout - Stake).
            </p>
          </section>

          {/* Implied Probability */}
          <section className="bg-[#0c0c0e] border border-gold/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gold mb-4 font-heading border-l-4 border-gold pl-3">
              Calculating Implied Probability
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Implied probability converts the odds into a percentage, showing you the exact chance of an event happening according to the bookmaker's market. Smart bettors use this to find "value" bets.
            </p>

            <div className="bg-black/50 border border-gold/40 rounded-xl p-6 mb-6">
              <h3 className="text-white font-bold text-xl mb-3">The Formula:</h3>
              <p className="text-gold font-mono text-lg bg-black p-3 rounded text-center border border-gray-800">
                Implied Probability = (1 ÷ Decimal Odds) × 100
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              If Virat Kohli is listed at odds of <strong className="text-white">4.00</strong> to be the Top Run Scorer in a match, the implied probability is: <br/>
              <code className="bg-black p-1 text-gold rounded border border-gray-800 mt-2 inline-block">(1 ÷ 4.00) × 100 = 25%</code>
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              If you analyze his recent form and believe he actually has a 35% chance of being the top scorer, this bet offers "value" because your estimated probability is higher than the bookmaker's implied probability.
            </p>
          </section>

          {/* Bookmaker Margin */}
          <section className="bg-[#0c0c0e] border border-gold/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gold mb-4 font-heading border-l-4 border-gold pl-3">
              Understanding the Bookmaker's Margin (Vig)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you convert all outcomes of a match into implied probabilities and add them together, the total will always be greater than 100%. This extra percentage is known as the "vigorish" or "overround," which is the bookmaker's profit margin.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When calculating odds, always factor in the margin. Markets with lower margins offer better value for bettors. Tools and calculators can help you identify markets where the bookmaker has set a lower margin, maximizing your potential long-term returns.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-gold/20 to-black border border-gold/40 rounded-3xl p-10 text-center space-y-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gold uppercase tracking-wider font-heading">
              Put Your Knowledge to the Test
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Now that you understand how to read odds, explore real-time cricket markets on Mahadev Book.
            </p>
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-white text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Your Betting ID
            </a>
          </div>

        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
