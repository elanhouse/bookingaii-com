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
  title: "Booking AI, Inc. — Revenue Operating System for Self-Storage",
  description:
    "Booking AI, Inc. builds RevvBrain, the Revenue Operating System for the self-storage industry. Formerly operating as Storage Radar and StorageBookings.",
  openGraph: {
    title: "Booking AI, Inc.",
    description:
      "Revenue Operating System for Self-Storage. Formerly Storage Radar & StorageBookings.",
    url: "https://bookingaii.com",
    siteName: "Booking AI, Inc.",
    type: "website",
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
