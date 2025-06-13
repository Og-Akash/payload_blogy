import React from "react";
import "./styles.css";
import BaseLayout from "@/components/layouts/Base";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
