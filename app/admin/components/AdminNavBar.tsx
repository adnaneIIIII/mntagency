import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import React from "react";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function AdminNavBar() {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center mt-2 mb-2">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={50}
            height={30}
            alt="logo"
            className=""
          />
          </Link>
          <span className="text-[#fff] font-semibold text-2xl ml-1 hidden md:flex">
            Shopiy
          </span>
        
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="hidden md:flex flex-col">
          <span className="text-sm text-gray-200  leading-3 font-medium">
            adnane el otmani
          </span>
          <span className="text-xs  text-gray-400 text-right">Admin</span>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-28 text-left">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <LogoutLink>LogOut</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
