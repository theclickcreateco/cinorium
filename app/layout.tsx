import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "./components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://cinorium.com'),
  title: {
    default: "CINORIUM — Designed to Lead",
    template: "%s | CINORIUM"
  },
  description: "A collective of specialized studios building brands, digital platforms, and growth systems for modern businesses.",
  keywords: ["Digital Agency", "Web Development", "Graphic Design", "SEO", "Motion Design", "Animation"],
  openGraph: {
    title: "CINORIUM — Designed to Lead",
    description: "A collective of specialized studios building brands, digital platforms, and growth systems for modern businesses.",
    url: "https://cinorium.com",
    siteName: "CINORIUM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CINORIUM Agency Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CINORIUM — Designed to Lead",
    description: "A collective of specialized studios building brands, digital platforms, and growth systems for modern businesses.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CINORIUM",
              "url": "https://cinorium.com",
              "logo": "https://cinorium.com/logo.png",
              "sameAs": [
                "https://x.com/cinorium_",
                "https://www.facebook.com/cinorium",
                "https://www.instagram.com/cinorium_/"
              ],
              "description": "A collective of specialized studios building brands, digital platforms, and growth systems for modern businesses."
            })
          }}
        />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}

