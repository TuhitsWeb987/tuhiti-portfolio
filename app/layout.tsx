
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Tuhiti Falchetto - Développeur full stack",
  description: "Développeur web React, Tailwind, Next.js et TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" suppressHydrationWarning>
      <body
        className={cn(GeistSans.variable, AnekTelugu, "font-sans h-full")}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
