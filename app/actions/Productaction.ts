"use server";
import { notFound, redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "../lib/ZodSchema";
import { PrismaClient } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function ProductAction() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "adnane.elotmani@usmba.ac.ma") {
    redirect("/admin");
  }

  const existingProducts = await prisma.products.findMany({
    orderBy: { id: "asc" }, // Replace "id" with the correct field name
  });

  return existingProducts; // Return the fetched products
}

export async function ProductHome() {
  const existingProducts = await prisma.products.findMany({
    where: { isFeatured: true },
    orderBy: { id: "asc" }, // Replace "id" with the correct field name
    select: {
      name: true,
      price: true,
      id: true,
    },
  });

  return existingProducts; // Return the fetched products
}

const prisma = new PrismaClient();

export async function getData(productId: string) {
  try {
    const data = await prisma.products.findUnique({
      where: {
        id: productId,
      },
      select: {
        price: true,
        images: true,
        description: true,
        name: true,
        compareAtPrice: true,
        shortdescription: true,
      },
    });

    if (!data) {
      return notFound(); // Ensure `notFound` is imported from "next/navigation"
    }

    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null; // Handle errors gracefully
  }
}

export async function createProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "adnane.elotmani@usmba.ac.ma") {
    redirect("/");
  }
  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );
  try {
    await prisma.products.create({
      data: {
        name: submission.value.name,
        description: submission.value.description,
        shortdescription: submission.value.shortdescription,
        status: submission.value.status,
        price: submission.value.price,
        images: flattenUrls,
        isFeatured: submission.value.isFeatured,
        compareAtPrice: submission.value.compareAtPrice,
      },
    });
    return redirect("/admin/products");
  } catch (error) {
    console.log("error", error);
    // Return an error state if needed
    return submission.reply();
  }
}


