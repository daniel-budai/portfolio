import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import Providers from "@/providers/SWRProvider";

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"], //for TS
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "| Daniel Budai | Portfolio |",
  description: "Portfolio of Daniel Budai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans overflow-x-hidden"
        )}
      >
        <Providers>
          <ScrollProgressBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
