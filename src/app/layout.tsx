import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"]
});
const lato = Lato({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-lato'
});


export const metadata: Metadata = {
  title: "Viridis",
  description: "Discover Viridis: Your gateway to a modern banking experience. Seamlessly manage finances with our innovative fintech platform, designed to empower your financial journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${lato.variable} overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
