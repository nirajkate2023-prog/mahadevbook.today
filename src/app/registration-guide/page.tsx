import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mahadev Book Registration Guide | How to Create an Account",
  description:
    "A comprehensive guide on Mahadev Book registration. Learn what information is required to get your ID and how to start betting online.",
  alternates: {
    canonical: "https://mahadevbooks.today/registration-guide/",
  },
  openGraph: {
    title: "Mahadev Book Registration Guide",
    description: "Step-by-step instructions on securing your Mahadev Book ID.",
    url: "https://mahadevbooks.today/registration-guide/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mahadev Book Registration Guide",
  description: "A tutorial on how to register for a Mahadev Book ID.",
  author: {
    "@type": "Organization",
    name: "Mahadev Book",
    url: "https://mahadevbooks.today",
  },
  datePublished: "2026-09-24",
};

export default function RegistrationGuide() {
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
          { label: "Registration Guide" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            Mahadev Book Registration Guide
          </h1>
          <p className="text-gray-400 text-sm mt-2">How to Secure Your Official Betting ID</p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
            Before you can place a bet on cricket or play online casino games, you must complete the <strong>Mahadev Book registration</strong> process. Because of the unique architecture of the platform, registration works slightly differently than standard websites.
          </p>
        </section>

        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Step-by-Step Registration
          </h2>
          <ol className="space-y-6 text-gray-300">
            <li className="bg-black/40 p-5 rounded-xl border border-gray-800">
              <h3 className="text-gold font-bold mb-2">Step 1: Contact Support</h3>
              <p className="text-sm">Unlike typical platforms with a public "Sign Up" button, Mahadev Book ID registration is usually handled via official WhatsApp support channels. You must initiate a chat with a verified representative.</p>
            </li>
            <li className="bg-black/40 p-5 rounded-xl border border-gray-800">
              <h3 className="text-gold font-bold mb-2">Step 2: Provide Required Information</h3>
              <p className="text-sm">You will be asked to provide basic <strong>Mahadev Book registration information</strong>. This typically includes your full name, a valid phone number, and sometimes proof of age (as users must be 18+).</p>
            </li>
            <li className="bg-black/40 p-5 rounded-xl border border-gray-800">
              <h3 className="text-gold font-bold mb-2">Step 3: Initial Deposit</h3>
              <p className="text-sm">To activate your new ID, you are required to make a minimum deposit into your betting wallet. This is usually facilitated via secure UPI payment methods.</p>
            </li>
            <li className="bg-black/40 p-5 rounded-xl border border-gray-800">
              <h3 className="text-gold font-bold mb-2">Step 4: Receive Your ID</h3>
              <p className="text-sm">Once the deposit is confirmed, the support agent will generate your unique <strong>Mahadev Book ID registration</strong> details (username and temporary password). You should change this password immediately upon your first <Link href="/login-guide" className="text-gold hover:underline">login</Link>.</p>
            </li>
          </ol>
        </section>

        <section className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg text-center">
          <p className="text-gray-300 italic text-sm">
            Please be aware of scammers offering "instant" or "free" Mahadev Book IDs. Always verify that you are speaking with official representatives. Read more on our <Link href="/safety-and-legal" className="text-gold font-semibold hover:underline">Safety Page</Link>.
          </p>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
