import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rirekisho",
  description:
    "A minimal and clean Next.js CV template for a quick and easy personal site, using resume.json for effortless personalization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
