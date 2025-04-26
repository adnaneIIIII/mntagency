"use client";
import React from "react";
import AdminNavBar from "./components/AdminNavBar";
import AdminLinks from "./components/AdminLinks";
import { usePathname } from "next/navigation";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

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
      <div className="bg-slate-700 pl-4 pr-4 p-2 bg-light ">
        <AdminNavBar />
      </div>
      <LoginLink>login</LoginLink>

      <div className=" flex min-h-screen ">
        <div className="w-[15%] border-r-1">
          <AdminLinks />
        </div>

        <div className="w-[95%]  ">
          <div className="flex-col">
            <h1 className=" capitalize font-semibold text-2xl pl-8 pt-4">
              {pageName}
            </h1>

            {children}
          </div>
        </div>
      </div>
    </>
  );
}
