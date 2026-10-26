import type { Metadata } from "next";
import { display, serif, mono } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/context/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Srikailaash Kumar S — Software Engineer",
  description:
    "Software engineer who cares about readable code and interfaces that don't feel like an afterthought.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${serif.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
