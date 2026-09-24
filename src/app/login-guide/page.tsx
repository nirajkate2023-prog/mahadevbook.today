import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mahadev Book Login Guide | How to Access Your Account",
  description:
    "A step-by-step tutorial on how the Mahadev Book login process works, how to secure your login ID, and how to access the app.",
  alternates: {
    canonical: "https://mahadevbooks.today/login-guide/",
  },
  openGraph: {
    title: "Mahadev Book Login Guide",
    description: "Learn how to securely log in to your Mahadev Book ID account across all devices.",
    url: "https://mahadevbooks.today/login-guide/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mahadev Book Login Guide",
  description: "A tutorial on securely accessing your Mahadev Book ID.",
  author: {
    "@type": "Organization",
    name: "Mahadev Book",
    url: "https://mahadevbooks.today",
  },
  datePublished: "2026-09-24",
};

export default function LoginGuide() {
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
          { label: "Login Guide" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            Mahadev Book Login Guide
          </h1>
          <p className="text-gray-400 text-sm mt-2">How to Securely Access Your Account</p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
            Once you have generated your <Link href="/what-is-mahadev-book-id" className="text-gold hover:underline">Mahadev Book ID</Link>, you need to know how to securely access the platform. This guide explains how the <strong>Mahadev Book login</strong> process works across different devices.
          </p>
        </section>

        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            The Standard Login Process
          </h2>
          <ol className="space-y-4 text-gray-300">
            <li className="flex gap-4">
              <span className="bg-gold text-black font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-white">Navigate to the Official Portal:</strong> Always ensure you are on the verified Mahadev Book online platform. Check the URL to avoid phishing sites.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="bg-gold text-black font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-white">Enter Your Mahadev Book Login ID:</strong> Input the unique alphanumeric ID provided to you by the support team during registration.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="bg-gold text-black font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-white">Enter Password & Verify:</strong> Input your password. If you have Two-Factor Authentication (2FA) enabled, you will need to enter the OTP sent to your registered number.
              </div>
            </li>
          </ol>
        </section>

        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Mahadev Book App Login vs. Cricket Login
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Users often wonder if there is a difference between the <strong>Mahadev Book app login</strong> and the web-based <strong>Mahadev Book cricket login</strong>. The answer is no. Your single Mahadev Book ID grants you access across all platforms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Desktop Web:</strong> Ideal for multi-tab betting and viewing live streams.</li>
            <li><strong>Mobile Web:</strong> Optimized for browsing on the go without downloading software.</li>
            <li><strong>Mobile App:</strong> Provides push notifications and faster load times. The login process remains identical.</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto bg-red-900/20 border border-red-500/50 rounded-2xl p-6 md:p-10 shadow-lg text-center space-y-4">
          <h2 className="text-xl font-bold text-red-400 uppercase tracking-wider">
            Security Warning
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Never share your <strong>Mahadev Book ID login</strong> credentials with anyone, including individuals claiming to be support agents. Official representatives will never ask for your password. For more information on protecting yourself, read our <Link href="/safety-and-legal" className="text-red-300 font-bold hover:underline">Safety & Legal Considerations</Link> page.
          </p>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
