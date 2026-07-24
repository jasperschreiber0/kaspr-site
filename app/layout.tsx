import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaspr — The AI front desk for your Instagram",
  description:
    "Kaspr answers your Instagram DMs and comments in seconds, follows up quiet enquiries, and keeps your feed posting — turning Instagram attention into booked revenue. Built for Australian appointment-based businesses.",
  metadataBase: new URL("https://kaspr.com.au"),
  icons: {
    icon: "/kaspr-icon.png",
    apple: "/kaspr-icon.png",
  },
  openGraph: {
    title: "Kaspr — The AI front desk for your Instagram",
    description:
      "Every DM and comment answered in seconds, quiet enquiries followed up, your feed kept posting — while you're with a client.",
    url: "https://kaspr.com.au",
    siteName: "Kaspr",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaspr — The AI front desk for Australian appointment-based businesses",
    description:
      "Every DM answered, every quiet lead followed up, your feed kept posting. All done for you.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
