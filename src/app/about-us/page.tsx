import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us – Mahadev Book | Online Cricket ID & Betting Platform",
  description:
    "Learn about Mahadev Book: what the platform provides, how account access works, support channels, and important eligibility information for users in India.",
  alternates: {
    canonical: "https://mahadevbooks.today/about-us/",
  },
  openGraph: {
    title: "About Us – Mahadev Book | Online Cricket ID & Betting Platform",
    description:
      "Mahadev Book provides online cricket ID access, sports betting markets, casino games, and fantasy cricket with support available via WhatsApp.",
    url: "https://mahadevbooks.today/about-us/",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "About Us – Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Mahadev Book | Online Cricket ID & Betting Platform",
    description:
      "Mahadev Book provides online cricket ID access, sports betting markets, casino games, and fantasy cricket with support available via WhatsApp.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold font-heading">
              About Mahadev Book
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              <strong className="text-gold font-bold">Mahadev Book</strong> is an online sports betting and cricket ID platform that helps users access cricket markets, other sports, casino games, and fantasy cricket. This site explains how registration, login, payments, and responsible use work so you can decide whether the service is right for you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              Who We Are & Operating History
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Founded with the vision of providing a transparent and user-friendly betting environment, <strong className="text-gold">Mahadev Book</strong> has been operating securely for several years, serving a growing community of sports enthusiasts across India. Our core focus is on account-based access for online betting. Users receive a Mahadev Book ID, deposit through supported payment methods such as UPI, and place bets on available events. We aim to keep the process clear: how to get an ID, how to log in, and exactly how to contact our 24/7 dedicated support team when you need help.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              What the Platform Provides
            </h2>
            <ul className="space-y-3 pl-6 text-sm text-gray-300 list-disc">
              <li>
                <strong className="text-white">Sports Betting –</strong> Markets on cricket, football, tennis, kabaddi, and other listed sports.
              </li>
              <li>
                <strong className="text-white">Casino Games –</strong> Live and table-style games such as Teen Patti, Roulette, Andar Bahar, Blackjack, and Baccarat where offered.
              </li>
              <li>
                <strong className="text-white">Fantasy Cricket –</strong> Contests where you select players and compete based on real-match performance.
              </li>
              <li>
                <strong className="text-white">Live Betting –</strong> In-play markets on selected live matches with updating odds.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              How Account Access Works
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              New users register through the official website or WhatsApp support, receive a Mahadev Book ID, and sign in from the Login page. After logging in, you can manage deposits and withdrawals using the payment options available on your account. For a practical walkthrough, see our{" "}
              <a href="/cricket-betting-guide" className="text-gold hover:underline">Cricket Betting Guide</a> and{" "}
              <a href="/upi-payment-guide" className="text-gold hover:underline">UPI Payment Guide</a>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              Security &amp; Account Protection
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Protect your account with a strong unique password, avoid public Wi-Fi when logging in, and only use the official domain{" "}
              <strong className="text-gold">mahadevbooks.today</strong>. Enable any extra verification options available on your account. For how we handle personal data, read the{" "}
              <a href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              Responsible Gaming
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Betting involves financial risk and should never be treated as income. Set a budget, take breaks, and use available tools such as deposit limits or self-exclusion where offered. Full guidance is on our{" "}
              <a href="/responsible-gaming" className="text-gold hover:underline">Responsible Gaming</a> page.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              Official Customer Support Contacts
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We believe in 100% transparency and accessibility. Support is available 24/7 via WhatsApp for ID creation, login help, deposits, and withdrawals. 
            </p>
            <ul className="space-y-2 pl-6 text-sm text-gray-300 list-disc">
              <li><strong className="text-white">Official WhatsApp Support:</strong> +91-9864360936</li>
              <li><strong className="text-white">Email Inquiries:</strong> support@mahadevbooks.today</li>
              <li><strong className="text-white">Operating Hours:</strong> 24 Hours, 7 Days a Week</li>
            </ul>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              You can also review common answers on our <a href="/faqs" className="text-gold hover:underline">FAQs</a> page.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              Important Eligibility Information
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Mahadev Book is for users aged 18+ (or the legal gambling age where you live). You are responsible for confirming that online sports betting is permitted in your jurisdiction before registering or depositing. See our{" "}
              <a href="/terms-and-conditions" className="text-gold hover:underline">Terms and Conditions</a> for full account rules.
            </p>
          </div>

          <div className="pt-6 text-center">
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black hover:bg-gold hover:text-black hover:scale-105 active:scale-95 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-200"
            >
              Get Your Mahadev Book ID
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
