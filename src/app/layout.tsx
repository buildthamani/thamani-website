import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import "./globals.css";

const geistSans = localFont({
  src: [
    { path: "../../public/fonts/Geist-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/Geist-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/Geist-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Geist-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Geist-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Geist-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Geist-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Geist-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/Geist-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Thamani",
  description: "Discover the hidden patterns in your daily spending.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
