import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-neutral-50 dark:bg-zinc-950"}>
        <main className={"mx-auto max-w-[720px]"}>{children}</main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Notion Bloc",
};
