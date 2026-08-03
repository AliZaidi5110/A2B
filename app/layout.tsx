import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import { LanguageToaster } from "@/components/LanguageToaster";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury UK Chauffeur & Tours`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Luxury UK Chauffeur & Tours`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/images/hero/slide1.jpg", width: 1200, height: 630, alt: "A2B Chauffeur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Luxury UK Chauffeur & Tours`,
    description: siteConfig.description,
    images: ["/images/hero/slide1.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <LanguageToaster />
      </body>
    </html>
  );
}
