import type { Metadata } from "next";
import { Alice } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import RestaurantNavbar from "@/components/home-page/restaurant-navbar";
import RestaurantFooter from "@/components/home-page/restaurant-footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "L'Amitié",
  description: "French-Inspired Breakfast & Lunch Bistro in Downtown Denton",
  icons: {
    icon: "/favicon.ico",
  },
};

const alice = Alice({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const edwardian = localFont({
  src: "../fonts/edwardianscriptitc.ttf",
  variable: "--font-edwardian",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${alice.className} ${edwardian.variable} antialiased min-h-full flex flex-col`}
      >
        <RestaurantNavbar />
        <main className="flex-1">{children}</main>
        <RestaurantFooter />
        <SpeedInsights />
        <Analytics
          mode={
            process.env.NODE_ENV === "production" ? "production" : "development"
          }
        />
      </body>
    </html>
  );
}
