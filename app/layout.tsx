import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: {
    default: "OakSignal - Modern Systems for Youth Organizations",
    template: "%s | OakSignal",
  },
  description: "Reliable, maintainable digital systems for cadet and youth organizations. We build software that helps you focus on what matters.",
  keywords: ["youth organizations", "cadet systems", "digital transformation", "software for non-profits", "OakSignal"],
  authors: [{ name: "OakSignal Team" }],
  creator: "OakSignal",
  publisher: "OakSignal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "OakSignal - Modern Systems for Youth Organizations",
    description: "Reliable, maintainable digital systems for cadet and youth organizations.",
    url: "https://mjsamaha.github.io/oaksignal-landing/", // Replace with actual domain later if different
    siteName: "OakSignal",
    locale: "en_US",
    type: "website",
    // images: [ // Add later when we have an OG image
    //   {
    //     url: 'https://oaksignal.com/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'OakSignal',
    //   }
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OakSignal - Modern Systems for Youth Organizations",
    description: "Reliable, maintainable digital systems for cadet and youth organizations.",
    // images: ['https://oaksignal.com/og-image.jpg'], // Add later
  },
  alternates: {
    canonical: "https://mjsamaha.github.io/oaksignal-landing/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
