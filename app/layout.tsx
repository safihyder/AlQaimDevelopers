import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlQaim Developers - Web Development & Digital Marketing Agency",
  description:
    "Professional web development, graphic design, marketing, social media management, influencer marketing, and branding services.",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      // { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
