import React from "react";
import "./styles.css";
import BaseLayout from "@/components/layouts/Base";

export const metadata = {
  description: "Payload Blogy is a blog application built on top of Payload CMS.",
  title: "Payload Blog application",
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
