import type { Metadata } from "next";
import { Alice } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import RestarauntNavbar from "@/components/home-page/restaraunt-navbar";
import RestaurantFooter from "@/components/home-page/restaurant-footer";

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
});

const edwardian = localFont({
  src: "../fonts/edwardianscriptitc.ttf",
  variable: "--font-edwardian",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${alice.className} ${edwardian.variable} antialiased min-h-full flex flex-col`}
      >
        <RestarauntNavbar />
        <main className="flex-1">{children}</main>
        <RestaurantFooter />
      </body>
    </html>
  );
}
