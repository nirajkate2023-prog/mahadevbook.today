import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Safety & Legal Considerations | Mahadev Book Transparency",
  description:
    "Information regarding the safety, legitimacy, and legal considerations of using Mahadev Book and online sports betting platforms in India.",
  alternates: {
    canonical: "https://mahadevbooks.today/safety-and-legal/",
  },
  openGraph: {
    title: "Safety & Legal Considerations | Mahadev Book",
    description: "Understand the legal landscape and how to identify legitimate Mahadev Book platforms.",
    url: "https://mahadevbooks.today/safety-and-legal/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mahadev Book Safety and Legal Considerations",
  description: "An informational guide on betting safely and understanding the legal landscape of Mahadev Book in India.",
  author: {
    "@type": "Organization",
    name: "Mahadev Book",
    url: "https://mahadevbooks.today",
  },
  datePublished: "2026-09-24",
};

export default function SafetyAndLegal() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Safety & Legal Considerations" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            Safety & Legal Considerations
          </h1>
          <p className="text-gray-400 text-sm mt-2">Transparency in Online Betting</p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
            Due to recent news surrounding the brand, many users search for <strong>Mahadev Book safety and legal considerations</strong>. This page aims to provide transparency on how to navigate the online betting ecosystem responsibly and identify legitimate platforms.
          </p>
        </section>

        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            The Legal Landscape of Betting in India
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The legality of online sports betting in India is complex and varies heavily from state to state. While physical gambling houses are largely prohibited under the Public Gambling Act of 1867, online betting falls into a gray area in many jurisdictions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Certain states (like Telangana and Andhra Pradesh) have explicitly banned online real-money gaming, while others allow games of skill. As a user, it is your sole responsibility to ensure that accessing and participating in online betting platforms complies with your local state laws.
          </p>
        </section>

        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            How to Identify Legitimate Mahadev Book Websites
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Because "Mahadev Book" is a franchise model, there are many unauthorized copycats and phishing sites attempting to steal user deposits. Here is how to stay safe:
          </p>
          <ul className="space-y-4 text-gray-300">
             <li className="flex gap-4">
              <span className="text-gold font-bold">1.</span>
              <span><strong>No "Guaranteed" Winnings:</strong> Legitimate platforms operate on chance and skill. Any site claiming "100% trusted", "fixed matches", or "earn money guaranteed" is likely a scam.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold font-bold">2.</span>
              <span><strong>Verify WhatsApp Numbers:</strong> Always double-check that the WhatsApp number you are communicating with matches the official number listed on the verified website.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold font-bold">3.</span>
              <span><strong>Check the URL:</strong> Phishing sites often use slight misspellings (e.g., Mahadevboook). Always verify you are on a secure (HTTPS) connection.</span>
            </li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Responsible Gaming
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Betting should only be done for entertainment purposes with funds you can afford to lose. If you feel that your betting habits are becoming problematic, please seek help immediately and cease using all online platforms. For more information, please read our dedicated <Link href="/responsible-gaming" className="text-gold font-semibold hover:underline">Responsible Gaming</Link> page.
          </p>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
