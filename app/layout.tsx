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
  title: "Kaspr — Turn missed DMs into booked clients",
  description:
    "Kaspr auto-replies to your Instagram and TikTok DMs, captures leads from comments, and books appointments directly into your calendar. Built for Australian beauty and wellness businesses.",
  metadataBase: new URL("https://kaspr.com.au"),
  icons: {
    icon: "/kaspr-icon.png",
    apple: "/kaspr-icon.png",
  },
  openGraph: {
    title: "Kaspr — Turn missed DMs into booked clients",
    description:
      "Kaspr answers your Instagram and TikTok DMs, follows up on cold leads, and books appointments into your calendar — while you're on the floor.",
    url: "https://kaspr.com.au",
    siteName: "Kaspr",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaspr — Social media automation for Australian beauty businesses",
    description:
      "DM auto-replies, lead follow-ups, content scheduling. All done for you.",
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
