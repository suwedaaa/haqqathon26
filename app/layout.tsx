import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "../styles/xp-compat.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Haqqathon 2026",
  description:
    "The largest Muslim student-led hackathon in the world, empowering the next generation of innovators to build impactful solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
