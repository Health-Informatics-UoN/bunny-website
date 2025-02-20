import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";

export const metadata: Metadata = {
  title: "Hutch Bunny",
  description: "Your secure gateway to OMOP cohort discovery",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white dark:bg-black`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
