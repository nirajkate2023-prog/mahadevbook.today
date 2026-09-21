import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top #1 Official Website for Mahadev Book Online | Play Now",
  description:
    "Learn about the Mahadev Book Online platform, including how to access it, supported devices, account setup, and platform features.",
  keywords: [
    "Mahadev Book Online",
    "Mahadev online platform",
    "Mahadev betting account",
  ],
  alternates: {
    canonical: "https://mahadevbooks.today/mahadev-book-online/",
  },
};

export default function MahadevBookOnline() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Mahadev Book Online" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner Image */}
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
          <img
            src="https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-online.jpg"
            alt="Mahadev Book Online Platform"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        {/* Section 1: H1 & Intro */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            Mahadev Book Online
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to the official overview of the <strong className="text-gold">Mahadev Book Online</strong> platform. This guide explains exactly what the online service is, how you can access it, and the features available to registered users.
          </p>
        </section>

        {/* Section 2: What the online platform is */}
        <section className="max-w-5xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <h2 className="text-2xl font-bold text-gold uppercase mb-4">What the Online Platform Is</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Mahadev Book Online is a digital interface that connects users to sports markets and casino games. Rather than visiting a physical location, users can view live odds, manage their funds, and participate in fantasy sports entirely through their internet browser or mobile device.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The platform acts as a central hub for your betting ID, aggregating real-time data from sporting events around the world so you can make informed decisions.
          </p>
        </section>

        {/* Section 3: How to access & Supported Devices */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gold/30 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] shadow-lg">
            <h2 className="text-xl font-bold text-gold uppercase mb-4">How to Access It</h2>
            <p className="text-gray-300 leading-relaxed">
              Accessing the platform requires a verified account. Users cannot place bets anonymously. You must register through our official support channels (via WhatsApp) to receive your unique credentials. Once you have your ID and password, you can log in directly through the website interface.
            </p>
          </div>
          <div className="border border-gold/30 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] shadow-lg">
            <h2 className="text-xl font-bold text-gold uppercase mb-4">Supported Devices</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li><strong>Smartphones:</strong> Fully optimized for both Android and iOS web browsers (Chrome, Safari, etc.).</li>
              <li><strong>Tablets:</strong> Responsive design adapts to iPad and Android tablet screens.</li>
              <li><strong>Desktops/Laptops:</strong> Accessible via any modern web browser on Windows or macOS for a widescreen viewing experience.</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Account / Login Process */}
        <section className="max-w-5xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <h2 className="text-2xl font-bold text-gold uppercase mb-6 text-center">Account &amp; Login Process</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="bg-black/50 p-6 rounded-xl border border-gray-700 flex-1 text-center">
              <span className="text-gold font-bold text-xl block mb-2">1. Request ID</span>
              <p className="text-sm text-gray-400">Contact support to register your details and receive your unique betting ID.</p>
            </div>
            <div className="text-gold text-2xl hidden md:block">&rarr;</div>
            <div className="bg-black/50 p-6 rounded-xl border border-gray-700 flex-1 text-center">
              <span className="text-gold font-bold text-xl block mb-2">2. Secure Login</span>
              <p className="text-sm text-gray-400">Navigate to the login portal and enter your credentials.</p>
            </div>
            <div className="text-gold text-2xl hidden md:block">&rarr;</div>
            <div className="bg-black/50 p-6 rounded-xl border border-gray-700 flex-1 text-center">
              <span className="text-gold font-bold text-xl block mb-2">3. Deposit & Play</span>
              <p className="text-sm text-gray-400">Fund your account using supported payment methods to begin.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Platform Features */}
        <section className="max-w-5xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <h2 className="text-2xl font-bold text-gold uppercase mb-6">Platform Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black/30 p-5 rounded-lg border border-gold/10">
              <h3 className="font-bold text-white mb-2">Live Match Updates</h3>
              <p className="text-sm text-gray-400">Follow scores and changing market odds in real-time as the match progresses.</p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg border border-gold/10">
              <h3 className="font-bold text-white mb-2">Multi-Market Support</h3>
              <p className="text-sm text-gray-400">Switch seamlessly between cricket, tennis, football, and casino interfaces.</p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg border border-gold/10">
              <h3 className="font-bold text-white mb-2">Integrated Payments</h3>
              <p className="text-sm text-gray-400">Manage your deposits and request withdrawals directly from your dashboard.</p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg border border-gold/10">
              <h3 className="font-bold text-white mb-2">24/7 Support Portal</h3>
              <p className="text-sm text-gray-400">Access customer service representatives instantly if you encounter issues.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Security & Responsible Gaming */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gold/30 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] shadow-lg">
            <h2 className="text-xl font-bold text-gold uppercase mb-4">Security Information</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We implement standard web security practices to protect your login credentials and personal information. Users are advised to never share their passwords or OTPs with anyone, including support staff. Always ensure you are accessing the official URL to prevent phishing.
            </p>
          </div>
          <div className="border border-gold/30 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] shadow-lg">
            <h2 className="text-xl font-bold text-gold uppercase mb-4">Responsible Gaming</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Online betting should be for entertainment purposes only. Never bet money you cannot afford to lose.
            </p>
            <Link href="/responsible-gaming" className="text-gold hover:underline text-sm font-bold">
              Read our full Responsible Gaming Policy &rarr;
            </Link>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section className="max-w-5xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <h2 className="text-2xl font-bold text-gold uppercase mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold text-gold mb-2">Do I need to download software to use the online platform?</h3>
              <p className="text-sm text-gray-300">No, the online platform is fully web-based and can be accessed through your browser without downloading any additional software.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold text-gold mb-2">Can I manage my funds directly on the platform?</h3>
              <p className="text-sm text-gray-300">Yes, once logged in, you can view your balance, initiate deposits, and request withdrawals from your account dashboard.</p>
            </div>
          </div>
        </section>

        {/* Section 8: Internal Links Map */}
        <section className="max-w-4xl mx-auto text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 uppercase tracking-widest text-sm font-bold">Explore More</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/" className="text-white hover:text-gold transition-colors underline-offset-4 hover:underline">
              &rarr; Mahadev Book
            </Link>
            <Link href="/mahadev-app" className="text-white hover:text-gold transition-colors underline-offset-4 hover:underline">
              &rarr; Mahadev Book App
            </Link>
            <Link href="/login" className="text-white hover:text-gold transition-colors underline-offset-4 hover:underline">
              &rarr; Login
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
