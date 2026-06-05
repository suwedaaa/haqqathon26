import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "../styles/xp-compat.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "STEMM Haqqathon",
  description:
    "The largest Muslim student-led hackathon in the world, empowering the next generation of innovators to build impactful solutions.",
  icons: {
    icon: "/STEMM_logo.svg",
    apple: "/STEMM_logo.svg",
  },
  openGraph: {
    title: "STEMM Haqqathon",
    description:
      "The largest Muslim student-led hackathon in the world, empowering the next generation of innovators to build impactful solutions.",
    images: [{ url: "/STEMM_logo.svg" }],
  },
  twitter: {
    card: "summary",
    title: "STEMM Haqqathon",
    description:
      "The largest Muslim student-led hackathon in the world, empowering the next generation of innovators to build impactful solutions.",
    images: ["/STEMM_logo.svg"],
  },
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
