'use client'
import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="p-4">
      <form>
        <div className="flex items-center gap-4 ">
          <Button variant={"outline"} size={"icon"} asChild>
            <Link href={"/admin/categories"}>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-semi-bold tracking-tighter">
            New Category
          </h1>
        </div>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Category Details</CardTitle>
            <CardDescription>Enter your Category details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                  type="text"
                  //   key={fields.name.key}
                  //   name={fields.name.name}
                  //   defaultValue={fields.name.initialValue || ""}
                  className="w-full"
                  placeholder="Product Name"
                />
                {/* <p className="text-red-500">{fields.name.errors}</p> */}
              </div>
              <div className="flex flex-col gap-3">
                <Label>Description</Label>
                <Textarea placeholder="Product Description" />
                {/* <p className="text-red-500">{fields.name.errors}</p> */}
              </div>
              <div className="flex flex-col gap-3">
                <Label>Images</Label>
                <Input type="hidden" />
                {/* {Images !== undefined ? (
                  <Image
                    src={Images}
                    width={200}
                    height={200}
                    alt="Product Image"
                    className="w-[200px] h-[200px] object-cover border rounded-lg"
                  />
                ) : ( */}
                <UploadDropzone
                  endpoint="imagecategory"
                  onClientUploadComplete={(res) => {
                    // setImages(res.map((r) => r.url));
                  }}
                  onUploadError={(error: Error) => {
                    alert("Something went wrong");
                  }}
                />
                {/* )} */}
                {/* <p className="text-red-500">{fields.images.errors}</p> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
