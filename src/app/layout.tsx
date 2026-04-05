import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Cursor from "@/components/ui/Cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Kalu — Full-Stack Engineer",
  description: "Full-Stack Engineer navigating the edge of AI",
  openGraph: {
    title: 'David Kalu — Full-Stack Engineer',
    description: 'Full-Stack Engineer navigating the edge of AI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
