import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Mahadev Book Betting Guides & Industry News",
  description:
    "Explore the official Mahadev Book blog for expert cricket betting guides, IPL tips, UPI payment safety advice, glossary terms, and responsible gaming resources.",
  alternates: {
    canonical: "https://mahadevbooks.today/blog/",
  },
  openGraph: {
    title: "Blog – Mahadev Book Betting Guides & Industry News",
    description:
      "Expert cricket betting guides, IPL tips, UPI payment safety advice, glossary terms, and responsible gaming resources.",
    url: "https://mahadevbooks.today/blog/",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Mahadev Book Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Mahadev Book Betting Guides & Industry News",
    description:
      "Expert cricket betting guides, IPL tips, UPI payment safety advice, glossary terms, and responsible gaming resources.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Mahadev Book Blog",
  description: "Expert cricket betting guides, IPL tips, UPI payment safety advice, and glossary terms.",
  publisher: {
    "@type": "Organization",
    name: "Mahadev Book",
    logo: {
      "@type": "ImageObject",
      url: "https://mahadevbooks.today/wp-content/uploads/2025/05/cropped-mahadev-book-logo-120x40.png"
    }
  }
};

const posts = [
  {
    title: "How to Use Mahadev Book ID for IPL Betting – Step-by-Step Guide",
    description: "A complete step-by-step guide to using your Mahadev Book ID for IPL betting — from getting your ID to placing your first bet, understanding IPL markets, and making UPI deposits.",
    href: "/blog/how-to-use-mahadev-book-id-for-ipl-betting-step-by-step-guide",
    date: "May 17, 2025 (Updated August 2026)",
    image: "https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg",
    readTime: "9 min read"
  },
  {
    title: "How Live Cricket Betting Odds Work – Complete Guide",
    description: "Learn exactly how live cricket betting odds work — decimal vs fractional odds, why odds move during a match, how to read in-play markets, and how to use odds to make informed decisions.",
    href: "/blog/how-live-cricket-betting-odds-work",
    date: "August 14, 2026",
    image: "https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg",
    readTime: "7 min read"
  },
  {
    title: "IPL Betting Terms Explained for Beginners",
    description: "A clear glossary of IPL betting terms for beginners — from run line and toss bet to top batsman, in-play market, and cash out. Understand every term before you bet.",
    href: "/blog/ipl-betting-terms-explained",
    date: "August 14, 2026",
    image: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg",
    readTime: "6 min read"
  },
  {
    title: "Start Your IPL Fantasy Cricket Journey with Mahadev Book",
    description: "Everything you need to start your IPL fantasy cricket journey — how fantasy cricket works, how to build a winning team, scoring rules, contest types, and tips for beginners.",
    href: "/blog/start-your-ipl-fantasy-cricket-journey-with-mahadev-book",
    date: "May 17, 2025 (Updated August 2026)",
    image: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg",
    readTime: "11 min read"
  },
  {
    title: "Is UPI Safe for Online Payments? A Complete Safety Guide",
    description: "Is UPI safe? A complete guide to UPI payment security — how UPI encryption works, common scams to avoid, NPCI safety standards, and how to protect your UPI transactions.",
    href: "/blog/upi-payment-safety-guide",
    date: "August 14, 2026",
    image: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
    readTime: "8 min read"
  }
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Hero Banner */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold mb-4 font-heading">
            Mahadev Book Blog
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
          <p className="text-center text-gray-300 max-w-2xl mx-auto mt-6 text-sm md:text-base">
            Stay ahead with our expert guides, tips, and security insights. Learn how to place smart bets, understand cricket odds, and keep your online transactions secure.
          </p>
        </section>

        {/* Blog Post List */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider mb-2">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className="flex flex-col border border-gold/15 hover:border-gold/50 rounded-2xl bg-[#0c0c0e] shadow-lg overflow-hidden transition-all duration-300 group"
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/50 border-b border-gold/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 border border-gold/30 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {post.date}
                    </p>
                    <h3 className="text-lg font-bold text-gold group-hover:text-[#ffca61] transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={post.href}
                      className="inline-flex items-center text-gold font-bold text-sm hover:underline"
                    >
                      Read Full Guide <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Responsible Gaming Info */}
        <section className="max-w-4xl mx-auto border border-gold/25 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-gold">Bet Responsibly</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Betting on cricket and sports should be fun and entertaining. Set budget limits before you start, never gamble with money you can&apos;t afford to lose, and check our{" "}
            <a href="/responsible-gaming" className="text-gold font-semibold hover:underline">
              Responsible Gaming Guide
            </a>{" "}
            for safety resources and self-exclusion tools.
          </p>
        </section>

        {/* CTA Banner */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-4">
          <h2 className="text-xl font-bold text-gold uppercase">Get Your Online Cricket ID Today</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Ready to apply what you&apos;ve learned? Connect with us on WhatsApp to register your Mahadev Book account and get your ID within 2 minutes.
          </p>
          <a
            href="https://wa.me/+919864360936"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
          >
            Get Cricket ID on WhatsApp
          </a>
          <p className="text-xs text-gray-600">
            Must be 18+ to play. All payments and registrations are securely processed via WhatsApp.
          </p>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
