import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BraceTEN — A Student Inventor Concept by Evelyn Ma",
  description:
    "Explore BraceTEN, Evelyn Ma's early concept for a more thoughtful, adjustable knee-support prototype.",
  openGraph: {
    title: "BraceTEN — A Student Inventor Concept by Evelyn Ma",
    description:
      "An early product concept exploring adjustable knee support, created by student inventor Evelyn Ma.",
    images: [{ url: "/og.png", width: 1536, height: 864, alt: "BraceTEN student inventor concept" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BraceTEN — A Student Inventor Concept by Evelyn Ma",
    description:
      "An early product concept exploring adjustable knee support, created by student inventor Evelyn Ma.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
