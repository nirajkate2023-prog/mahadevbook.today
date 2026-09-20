import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export const metadata = {
  title: "Best Cricket Betting App in India | Top Cricket Betting Sites 2026",
  description:
    "Discover why the Mahadev web portal is superior to a standard cricket betting app. Enjoy faster load times, secure UPI payments, and access the best cricket betting sites features instantly.",
  alternates: {
    canonical: "https://mahadevbooks.today/cricket-betting-app/",
  },
};

export default function CricketBettingAppPage() {
  return (
    <>
      <Header />
      <div className="bg-black text-white min-h-screen pb-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Cricket Betting App" },
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12 border-b border-gold/20 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              The Ultimate <span className="text-gold">Cricket Betting App</span> Alternative
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              If you are searching for the best <strong>cricket betting app</strong>, you have likely noticed that Google Play and the App Store restrict real-money betting applications. This forces users to download dangerous, unverified APK files from random <strong>cricket betting sites</strong>.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/+919864360936"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full text-lg uppercase tracking-wider shadow-[0_0_15px_rgba(255,202,97,0.4)] transition-all duration-300"
              >
                Access Secure Web-App Now
              </a>
            </div>
          </div>

          <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
            
            <section className="bg-navy p-6 md:p-8 rounded-2xl border border-gold/10 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Why a Mobile Web-App is Better</h2>
              <p className="mb-4">
                Instead of risking your device security with an unknown <strong>cricket betting app</strong>, Mahadev Book uses a highly optimized <em>Progressive Web App (PWA)</em>. This gives you the exact same features as top cricket betting sites, directly in your browser.
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li><strong>No Downloads Required:</strong> Save your phone storage and avoid malicious software.</li>
                <li><strong>Instant Updates:</strong> You never have to go to an app store to download updates. You always have the latest version.</li>
                <li><strong>Lightning Fast Live Odds:</strong> The portal is optimized for 4G/5G networks to ensure you never miss a live betting opportunity during the IPL.</li>
              </ul>
            </section>

            <section className="bg-navy p-6 md:p-8 rounded-2xl border border-gold/10 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Features of Top Cricket Betting Sites</h2>
              <p className="mb-4">
                We combine the best features of the world's leading <strong>cricket betting sites</strong> into one seamless Mahadev ID experience:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-gold mb-2">Live Streaming</h3>
                  <p className="text-sm">Watch the match directly alongside your betting slip without switching apps.</p>
                </div>
                <div className="bg-dark-card p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-gold mb-2">Secure UPI</h3>
                  <p className="text-sm">Instant 24/7 deposits and withdrawals using your favorite Indian payment apps like PhonePe and Paytm.</p>
                </div>
              </div>
            </section>
            
            <div className="mt-12 text-center bg-dark-card p-8 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Winning?</h3>
              <p className="mb-6">Don't settle for a slow cricket betting app. Use the industry's fastest web-app today.</p>
              <Link href="/online-cricket-id" className="text-gold hover:underline font-bold text-lg">
                Learn how to get your Cricket ID &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
