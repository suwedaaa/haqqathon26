import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.scss";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Haqqathon 2026",
  description: "The largest muslim student-led hackathon in the world, empowering the next generation of innovators to build impactful solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libreBaskerville.className}>
        {children}
      </body>
    </html>
  );
}
