import "./globals.scss";
import {
  DM_Serif_Display,
  Montserrat_Alternates,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";
import Head from "next/head";

// ✅ Define fonts with proper settings
const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-dm",
  display: "swap",
  adjustFontFallback: false,
});

const montserratAlternates = Montserrat_Alternates({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mont",
  display: "swap",
  adjustFontFallback: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: ["--tp-ff-body", "--tp-ff-heading"],
  display: "swap",
  adjustFontFallback: false,
});

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-urban",
  display: "swap",
  adjustFontFallback: false,
});

// ✅ Next.js 15+ Metadata Configuration
export const metadata = {
  title: "Softec - Software & Technology React Next.js Template",
  description: "AI-driven software solutions",
  openGraph: {
    title: "Softec - Data Analytics",
    description: "AI-powered software for business intelligence",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Softec - Data Analytics",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        {/* ✅ Ensures Google Fonts are loaded properly */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap"
          as="style"
          crossOrigin="anonymous"
        />

        {/* ✅ Structured Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:type" content={metadata.openGraph.type} />
      </Head>
      <body
        className={`${dmSerifDisplay.variable} ${montserratAlternates.variable} ${plusJakartaSans.variable} ${urbanist.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
