import "./globals.scss";
import PropTypes from "prop-types";
import {
  DM_Serif_Display,
  Montserrat_Alternates,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";

// ✅ Define fonts with Next.js 15+ Metadata API
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

export const metadata = {
  title: "Softec - Software & Technology React Next.js Template",
  description: "AI-driven software solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dmSerifDisplay.variable} ${montserratAlternates.variable} ${plusJakartaSans.variable} ${urbanist.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

// ✅ Add PropTypes validation
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
