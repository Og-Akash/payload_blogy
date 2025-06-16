import React from "react";
import "./styles.css";
import BaseLayout from "@/components/layouts/Base";
import {  Outfit } from "next/font/google";
import { cn } from "@/lib/cn";

export const metadata = {
  description: "Payload Blogy is a blog application built on top of Payload CMS.",
  title: "Payload Blog application",
};

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  fallback: ["system-ui", "sans-sarif"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("antialiased", outfit.variable)}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
