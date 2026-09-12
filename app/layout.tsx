import "./globals.css";
import "./portfolio.css";
import "./portfolio-overrides.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amar Jyoti | AI Product & Product Analytics",
  description:
    "Portfolio of Amar Jyoti, focused on AI Product, Product Analytics, GenAI SaaS, SQL/Python analytics, product research and workflow automation.",
  keywords: [
    "AI Product",
    "Product Analytics",
    "GenAI SaaS",
    "SQL",
    "Python",
    "Product Analyst",
    "Business Analytics",
  ],
  authors: [{ name: "Amar Jyoti" }],
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
