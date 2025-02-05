import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function page() {
  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-start">
          <Button asChild className="flex items-center gap-x-2 ">
            <Link href="./categories/create" className="flex items-center">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Category</span>
            </Link>
          </Button>
        </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>View all your Categories</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
              </Table>
            </CardContent>
          </Card>
        </div>
      {/* <div className="pt-[36rem]">  </div> */}
    </>
  );
}
