import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Email Connector",
  description: "Connect and manage your email",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
