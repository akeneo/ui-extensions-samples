import type { Metadata } from "next";
import ThemeClient from "./themed-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "nextjs ui extension demo app",
  description: "Serve as demo app by using DSM components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeClient>
          {children}
        </ThemeClient>
      </body>
    </html>
  );
}
