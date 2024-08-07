import "./globals.css";
import { Roboto as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight:["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Ayush B.",
  description: "Myself in a glimpse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ActiveSectionContextProvider>
              {children}
            </ActiveSectionContextProvider>
            
          </ThemeProvider>
      </body>
    </html>
  );
}
