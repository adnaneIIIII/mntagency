"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { contact } from "../lib/ZodSchema";
import { parseWithZod } from "@conform-to/zod";
import { prisma } from "../lib/db";

// import { auth, currentUser } from "@clerk/nextjs/server";
// import { prisma } from "../lib/db";

// export async function syncUser() {
//   try {
//     const { userId } = await auth();
//     const user = await currentUser();
//     if (!userId || !user) return;

//     const existingUser = await prisma.user.findUnique({
//       where: {
//         clerkId: userId,
//       },
//     });

//     if (existingUser) return existingUser;
    
//     const dbUser = await prisma.user.create({
//       data: {
//         clerkId: userId,
//         name: `${user.firstName || ""} ${user.lastName || ""}`,
//         username:
//           user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
//         email: user.emailAddresses[0].emailAddress,
//         image: user.imageUrl,
//       },
//     });
//     return dbUser;
//   } catch (error) {
//     console.log("error", error);
//   }
// }

export async function ContactUs(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "adnane.elotmani@usmba.ac.ma") {
    redirect("/");
  }
  const submission = parseWithZod(formData, {
    schema: contact,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await prisma.contact.create({
      data: {
        firstname: submission.value.firstname,
        lastname: submission.value.lastname,
        email: submission.value.email,
        phone: submission.value.phone,
        company: submission.value.company,
        message: submission.value.message,
      },
    });
    return redirect("/");
  } catch (error) {
    console.log("error", error);
    // Return an error state if needed
    return submission.reply();
  }
}
