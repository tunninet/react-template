import "./globals.scss";
import PropTypes from "prop-types";
import localFont from "next/font/local";

// ✅ Self-hosted Fonts (Fix Google Fonts Download Issue)
const dmSerifDisplay = localFont({
  src: "../public/fonts/DMSerifDisplay-Regular.ttf",
  variable: "--tp-ff-dm",
});

const montserratAlternates = localFont({
  src: "../public/fonts/MontserratAlternates-Regular.ttf",
  variable: "--tp-ff-mont",
});

const plusJakartaSans = localFont({
  src: "../public/fonts/PlusJakartaSans-Regular.ttf",
  variable: "--tp-ff-body",
});

const urbanist = localFont({
  src: "../public/fonts/Urbanist-Regular.ttf",
  variable: "--tp-ff-urban",
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
