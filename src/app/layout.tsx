import type { Metadata } from "next";
import { Ruslan_Display } from "next/font/google";
import "./globals.css";

const ruslan = Ruslan_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ruslan",
});

export const metadata: Metadata = {
  title: "Mortgage Freedom Pro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ruslan.variable} antialiased`}>{children}</body>
    </html>
  );
}
