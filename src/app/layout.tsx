import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import IsDarkModeClient from "@/components/isDarkModeClient";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-neutral-50 dark:bg-zinc-950"}>
        <IsDarkModeClient />
        <main className={"mx-auto max-w-[720px]"}>{children}</main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Notion Bloc",
};
