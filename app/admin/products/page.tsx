import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-start">
          <Button asChild className="flex items-center gap-x-2 ">
            <Link href="./products/create" className="flex items-center">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Products</span>
            </Link>
          </Button>
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>View all your products</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
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
