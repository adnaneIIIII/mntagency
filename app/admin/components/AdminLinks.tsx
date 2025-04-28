"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Archive,
  // Layers3,
  ShoppingCart,
  Users,
  // Ticket,
  HomeIcon,
} from "lucide-react";

export default function AdminLinks() {
  const pathname = usePathname();
  const tabs = [
    { id: 0, icon: HomeIcon, name: "Home", link: "/admin" },
    { id: 1, icon: Archive, name: "Products", link: "/admin/products" },
    { id: 3, icon: ShoppingCart, name: "Orders", link: "/admin/orders" },
    { id: 4, icon: Users, name: "Customers", link: "/admin/customers" },
    // { id: 5, icon: Ticket, name: "Coupons", link: "/admin/coupons" },
  ];

  return (
    <div
      className="hidden relative md:block min-w-[80px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30
   dark:text-foreground text-muted-foreground border-r-2 border-separate"
    >
      <div className="p-4 font-semibold">Menu</div>
      <div className="flex flex-col p-2">
        {tabs.map((route) => (
          <Link
            key={route.link}
            href={route.link}
            className={cn(
              route.link === pathname
                ? "gap-2 !justify-start hover:bg-accent text-white hover:text-gray-100"
                : "gap-2 !justify-start text-gray-600 hover:bg-primary/90",

              "flex gap-2 px-2 rounded-lg text-sm py-3 items-center"
            )}
          >
            <route.icon size={20} />
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
