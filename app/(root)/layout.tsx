import FooterSection from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract the page name from the pathname

  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}
