"use client";
import React from "react";
import AdminNavBar from "./components/AdminNavBar";
import AdminLinks from "./components/AdminLinks";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Extract the page name from the pathname
  const pageName = pathname === "/" ? "Home" : pathname.replace("/", "");

  return (
    <>
      <div className="bg-[#1a1a1a] pl-4 pr-4 p-2">
        <AdminNavBar />
      </div>
      <div className=" flex min-h-screen">
        <div className="w-[15%] bg-[#ededed]">
          <AdminLinks />
        </div>
        <div className="w-[95%] bg-[#f1f1f1] ">
          {/* <h1 className="text-[#4a4a4a] capitalize font-semibold text-2xl pl-8 pt-4">
            {pageName}
          </h1> */}

          {children}
        </div>
      </div>
    </>
  );
}
