import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/minor-components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import ThemeToggleSmall from "@/minor-components/ThemeToggleSmall";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ITH Hostel",
  description: "A beautiful hostel located inside the University of Ibadan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${cormorant.variable} antialiased`}
      > 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster reverseOrder={false} position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}