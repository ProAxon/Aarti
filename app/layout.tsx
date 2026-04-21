import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";

export const metadata: Metadata = {
  title: "AARTI — Aausaheb Research and Training Institute",
  description: "A Youth Empowerment Movement — Train, Transform, Triumph. Empowering youth through AI-driven skills, innovation, and entrepreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
