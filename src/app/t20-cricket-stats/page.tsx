import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ultimate T20 Cricket Stats & Records Guide | Mahadev Book",
  description:
    "Explore comprehensive T20 cricket statistics, historic IPL records, highest run chases, and how stats influence betting strategies.",
  alternates: {
    canonical: "https://mahadevbooks.today/t20-cricket-stats/",
  },
  openGraph: {
    title: "Ultimate T20 Cricket Stats & Records Guide",
    description:
      "A deep dive into historical T20 records and how to use statistics for smarter cricket betting.",
    url: "https://mahadevbooks.today/t20-cricket-stats/",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "T20 Cricket Stats Guide",
      },
    ],
  },
};

export default function T20CricketStats() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "T20 Cricket Stats Guide" },
        ]}
      />
      <main className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gold font-heading leading-tight">
              Ultimate T20 Cricket Statistics Guide
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Dive into the numbers that define modern cricket. From explosive IPL run chases to the best bowling economies in T20 history.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4" />
          </div>

          {/* Section 1: The Evolution of T20 Stats */}
          <section className="bg-[#0c0c0e] border border-gold/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gold mb-4 font-heading border-l-4 border-gold pl-3">
              The Evolution of T20 Scoring
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              When T20 cricket first emerged, a team score of 160 was considered highly competitive. Today, driven by shorter boundaries, thicker bats, and data-driven batting strategies, average scores have skyrocketed. In premier leagues like the IPL, scores exceeding 200 are breached with unprecedented frequency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black border border-gray-800 p-6 rounded-xl text-center space-y-2 hover:border-gold transition-colors">
                <div className="text-4xl font-black text-gold">277/3</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Highest IPL Score</div>
                <div className="text-xs text-gray-500">SRH vs MI (2024)</div>
              </div>
              <div className="bg-black border border-gray-800 p-6 rounded-xl text-center space-y-2 hover:border-gold transition-colors">
                <div className="text-4xl font-black text-gold">175*</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Highest Ind. Score</div>
                <div className="text-xs text-gray-500">Chris Gayle (2013)</div>
              </div>
              <div className="bg-black border border-gray-800 p-6 rounded-xl text-center space-y-2 hover:border-gold transition-colors">
                <div className="text-4xl font-black text-gold">6/12</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Best Bowling Fig</div>
                <div className="text-xs text-gray-500">Alzarri Joseph (2019)</div>
              </div>
            </div>
          </section>

          {/* Section 2: Key Metrics */}
          <section className="bg-[#0c0c0e] border border-gold/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gold mb-6 font-heading border-l-4 border-gold pl-3">
              Crucial Metrics for T20 Analysis
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <h3 className="text-xl font-bold text-white mb-2">Strike Rate (Batting)</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Calculated as <code className="text-gold">(Runs Scored ÷ Balls Faced) × 100</code>. In T20 cricket, a player's strike rate is arguably more important than their batting average. Elite T20 finishers often maintain strike rates exceeding 150.00, meaning they score at a rate of 1.5 runs per ball.
                </p>
              </div>
              
              <div className="border-b border-gray-800 pb-4">
                <h3 className="text-xl font-bold text-white mb-2">Economy Rate (Bowling)</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Calculated as <code className="text-gold">Runs Conceded ÷ Overs Bowled</code>. A bowler who consistently goes for less than 7.5 runs an over in modern T20 cricket is considered gold dust, as they create pressure that forces batsmen to take risks against other bowlers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Dot Ball Percentage</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  The percentage of legal deliveries bowled where no runs are scored. High dot ball percentages directly correlate with falling wickets, as batsmen become frustrated and attempt high-risk shots.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Using Stats for Betting */}
          <section className="bg-[#0c0c0e] border border-gold/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gold mb-4 font-heading border-l-4 border-gold pl-3">
              Applying Statistics to Betting Strategy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Savvy bettors rely on data, not intuition. Here are three statistical trends to look out for when utilizing sports markets:
            </p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">1.</span>
                <span><strong className="text-white">Venue Toss Bias:</strong> Certain stadiums heavily favor the team chasing due to dew factors in the evening. Look at historical win-rates for the team bowling first at specific grounds.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">2.</span>
                <span><strong className="text-white">Matchups (Batter vs Bowler):</strong> Statistics reveal micro-battles. For example, some elite right-handed batsmen have historically low strike rates against left-arm wrist spin.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">3.</span>
                <span><strong className="text-white">Powerplay Run Rates:</strong> Teams that statistically score higher in the first 6 overs (Powerplay) win over 65% of their T20 matches. Monitoring live powerplay stats is crucial for in-play betting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">4.</span>
                <span><strong className="text-white">Player Form vs. Historical Data:</strong> While a player might have a great historical average at a venue, recent form (last 5 matches) is often a stronger indicator in the fast-paced T20 format. Always weigh recent strike rates heavier than career averages.</span>
              </li>
            </ul>
          </section>

          {/* Disclaimer */}
          <div className="bg-black border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-xs leading-relaxed max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> Statistics provided are based on historical data up to early 2026 and are for educational purposes. Past performance is not a guarantee of future outcomes. Always gamble responsibly.
            </p>
          </div>

        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
