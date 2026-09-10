import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Page Not Found | Mahadev Books Online",
  description: "The page you are looking for does not exist. Return to the Mahadev Books homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-extrabold text-gold tracking-tight">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider text-gray-200">
            Oops! Page Not Found
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            It looks like the page you are looking for has been moved, deleted, or does not exist. 
            Don't worry, you can easily find your way back to the action.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/"
              className="w-full sm:w-auto inline-block bg-gold hover:bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              Return Home
            </Link>
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block bg-transparent hover:bg-gold text-gold hover:text-black border border-gold px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
