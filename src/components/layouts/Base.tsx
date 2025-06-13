import React from "react";
import Header from "../header";
import Footer from "../ui/Footer";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="relative flex min-h-screen max-w-7xl w-full mx-auto flex-col overflow-hidden p-2">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Base;
