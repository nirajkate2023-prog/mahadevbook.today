import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Register on Mahadev Book – Get Your Cricket ID in 2 Minutes",
  description:
    "Register on Mahadev Book and get your online cricket betting ID. Learn how account signup works and how to access sports and casino markets. Sign up via the official site or WhatsApp support.",
  keywords: [
    "Mahadev Book register",
    "Mahadev Book signup",
    "get Mahadev Book ID",
    "online cricket ID registration",
    "cricket betting signup India",
  ],
  alternates: {
    canonical: "https://mahadevbooks.today/register/",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Register on Mahadev Book – Get Your Cricket ID in 2 Minutes",
    description:
      "Sign up and get your Mahadev Book cricket ID. Create your account through the official website or support channels.",
    url: "https://mahadevbooks.today/register/",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Register-now-1024x683.png",
        width: 1024,
        height: 683,
        alt: "Register on Mahadev Book – Get Cricket ID Instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Register on Mahadev Book | Get Your Cricket Betting ID",
    description:
      "Create your Mahadev Book account and get cricket ID access through the official registration process.",
  },
};

export default function Register() {
  return (
    <>
      <Header />
      <main className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Form Box */}
          <div className="lg:col-span-5 bg-dark-card border border-gold rounded-2xl p-5 sm:p-6 md:p-8 space-y-6 shadow-xl w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gold text-center tracking-wide font-heading">
              Mahadev Book
            </h2>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-black/60 border border-gold/30 rounded-md py-2.5 px-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Email / Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your email or phone number"
                  className="w-full bg-black/60 border border-gold/30 rounded-md py-2.5 px-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Create Password
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full bg-black/60 border border-gold/30 rounded-md py-2.5 px-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Re enter password"
                  className="w-full bg-black/60 border border-gold/30 rounded-md py-2.5 px-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-hover text-black py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-colors duration-200 mt-2"
              >
                Register
              </button>
            </form>

            <div className="text-center">
              <p className="text-xs text-gray-400">
                Already have an account?{" "}
                <a href="/login" className="text-gold font-bold hover:underline">
                  Log In
                </a>
              </p>
            </div>
          </div>

          {/* Right Info Section */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold font-heading tracking-wide">
                Join Mahadev Book Today!
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Create your Mahadev Book account to access cricket betting, sports markets, and casino games through your personal ID.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-gold font-heading">
                  How Registration Works
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Share your basic details through the official website or WhatsApp support. Once your Mahadev Book ID is created, you can log in, deposit using supported payment methods, and start browsing available markets.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-gold font-heading">
                  Current Promotions
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Current promotions, where available, are subject to applicable eligibility requirements and promotion terms. Ask support for the latest offers before depositing.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-gold font-heading">
                  Age and Eligibility
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  You must be 18+ (or the legal age where you live) and only use Mahadev Book where online sports betting is permitted. Review our Terms and Responsible Gaming pages before registering.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-gold font-heading">
                  Need Help Signing Up?
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Contact support on WhatsApp if you need help creating your ID, verifying details, or understanding deposit and withdrawal options.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/+919864360936"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent hover:bg-gold hover:text-black text-gold border border-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Register Now!
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
