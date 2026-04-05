import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amar Jyoti | Portfolio",
  description: "Portfolio website for Amar Jyoti"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}