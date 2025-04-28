import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { CountOrders } from "@/app/actions/order";
import Delet from "./_components/delet";
export default async function page() {
  const Orders = await CountOrders();
  return (
    <>
      <div className="p-4">
        <Card className="mt-4">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>View your site orders</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Full Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Orders.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {item.firstname}
                      {item.lastname}
                    </TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>
                      {item.purchasedAt.toLocaleDateString()}
                    </TableCell>
                    <TableCell>{item.pprice}</TableCell>
                    <TableCell className="text-right">
                      <Delet productid={item.id} name={item.id} />
                      <div className="flex h-5 items-center space-x-4 text-sm justify-end">
                        <Separator orientation="vertical" />
                        {/* <Edite data={item} /> */}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      {/* <div className="pt-[36rem]">  </div> */}
    </>
  );
}
