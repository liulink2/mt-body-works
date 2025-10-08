import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { CompanySettingsProvider } from "@/contexts/CompanySettingsContext";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MK Autoteck Centre",
  description: "MK Autoteck Centre Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        <CompanySettingsProvider>
          <Providers>{children}</Providers>
        </CompanySettingsProvider>
      </body>
    </html>
  );
}
