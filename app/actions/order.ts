"use server";
import { parseWithZod } from "@conform-to/zod";
import { Purchase } from "../lib/ZodSchema";
import { prisma } from "../lib/db";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createorder(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: Purchase,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await prisma.purchase.create({
      data: {
        firstname: submission.value.firstname,
        lastname: submission.value.lastname,
        email: submission.value.email,
        phone: submission.value.phone,
        country: submission.value.country,
        ppname: submission.value.ppname,
        pprice: submission.value.pprice,
        productId: submission.value.productId,
      },
    });
  } catch (error) {
    console.log("error", error);
  }

  redirect("/admin/products");
}

export async function CountOrders() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "adnane.elotmani@usmba.ac.ma") {
    redirect("/admin");
  }

  const existingProducts = await prisma.purchase.findMany({
    orderBy: { id: "asc" }, // Replace "id" with the correct field name
  });

  return existingProducts; // Return the fetched products
}
