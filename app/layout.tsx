import type { Metadata } from "next";
import "./globals.css";

const metadataBase = new URL(
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
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
      <body>{children}</body>
    </html>
  );
}
