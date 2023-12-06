import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../_assets/styles/globals.css";
import { Providers } from "../_providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "products-store",
  description: "next13 code challenge",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
