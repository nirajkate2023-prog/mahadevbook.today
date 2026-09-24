import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahadevbooks.today"),
  title: {
    default: "Mahadev Book: Get Online Betting IDs | Instant Betting Access",
    template: "%s | Mahadev Book",
  },
  description:
    "Mahadev Book, India's most reliable platform for online betting IDs and sports wagering, including sports betting, live casino, slots, poker, and fast withdrawals.",
  keywords: [
    "Mahadev Book",
    "cricket betting ID",
    "online sports betting",
    "IPL betting guide",
    "live cricket betting",
    "cricket ID India",
  ],
  authors: [{ name: "Mahadev Book", url: "https://mahadevbooks.today" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mahadevbooks.today/",
  },
  openGraph: {
    title: "Mahadev Book: Get Online Betting IDs | Instant Betting Access",
    description:
      "Mahadev Book, India's most reliable platform for online betting IDs and sports wagering, including sports betting, live casino, slots, poker, and fast withdrawals.",
    url: "https://mahadevbooks.today/",
    siteName: "Mahadev Book",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Mahadev Book – Official Cricket ID & Sports Betting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book: Get Online Betting IDs | Instant Betting Access",
    description:
      "Mahadev Book, India's most reliable platform for online betting IDs and sports wagering, including sports betting, live casino, slots, poker, and fast withdrawals.",
    images: [
      "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-dark-bg text-white antialiased">
        {children}
      </body>
      
      {/* Google Analytics Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-2JESH03M87`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2JESH03M87');
        `}
      </Script>
    </html>
  );
}

