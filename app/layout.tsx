import type { Metadata } from "next";
import { unbounded } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri",
  description: "Crafted by Sri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        {children}
      </body>
    </html>
  );
}