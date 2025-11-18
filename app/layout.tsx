import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { LocalBusinessStructuredData } from "./components/StructuredData";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Your Legal Saathi | Online Rent Agreement & Real Estate Services",
  description:
    "Hassle‑free online rent agreement registration, leave & license services, and doorstep biometric verification. Authorized Service Provider (ASP) approved by Govt of Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M0WZ33MLKW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M0WZ33MLKW');
          `}
        </Script>
        <LocalBusinessStructuredData
          name="Your Legal Saathi"
          description="Authorized Service Provider (ASP) for Leave License Agreement, Rent Agreement registration, and real estate legal documentation in Mumbai, Maharashtra. Doorstep biometric service, online police NOC, expert legal documentation."
          address={{
            streetAddress: "Sakinaka, Andheri (E)",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400072",
            addressCountry: "IN",
          }}
          telephone="+919653101966"
          email="legalsaathi2000@gmail.com"
          url="https://legalsaathi.com"
          priceRange="₹₹"
          areaServed={[
            "Mumbai",
            "Navi Mumbai",
            "Thane",
            "Pune",
            "Maharashtra",
            "India",
          ]}
          serviceType={[
            "Leave License Agreement",
            "Rent Agreement",
            "Lease Agreement",
            "Agreement for Sale",
            "Sale Deed",
            "Will Registration",
            "Release Deed",
            "Gift Deed",
            "Notary Services",
            "Power of Attorney",
          ]}
        />
        {children}
      </body>
    </html>
  );
}
