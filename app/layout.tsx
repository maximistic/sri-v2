import type { Metadata } from "next";
import { unbounded } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/context/theme-provider";
import { useCursorGlow } from "@/components/context/CursorGlow";

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
    <html lang="en" suppressHydrationWarning>
      <body className={unbounded.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <useCursorGlow className="min-h-screen">
        {children}
        </useCursorGlow>
        </ThemeProvider>
      </body>
    </html>
  );
}