import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "U&I Kitchenette | Sweet & Salty Homemade Cravings",
  description: "By Gujranwala's favorite nand-bhabhi dynamic duo. Pre-order 24-48 hours in advance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
