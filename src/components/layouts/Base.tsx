import React from "react";
import Header from "../header";
import Footer from "../ui/Footer";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="relative flex min-h-screen max-w-6xl w-full mx-auto flex-col overflow-hidden p-2">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
