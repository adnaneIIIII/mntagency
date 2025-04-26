import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Select the package that best fits your business needs and goals. All
            plans include dedicated support.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Starter</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                $13.99/ mo
              </span>
              <CardDescription className="text-sm">
                Perfect for small businesses just getting started with social
                media.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "3 social media platforms",
                  "12 posts per month",
                  "Basic content creation",
                  "Monthly performance report",
                  "Email support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative">
            <span className="bg-[#34bdc8] absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5 text-white">
              Popular
            </span>

            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">Premium</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  $49.99 / mo
                </span>
                <CardDescription className="text-sm">
                  Comprehensive solution for established businesses seeking
                  maximum impact.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 mb-2 text-sm">
                  {[
                    "All social media platforms",
                    "30 posts per month",
                    "Premium content creation",
                    "Weekly performance reports",
                    "Full community management",
                    "Complete website management",
                    "Social media advertising",
                    "24/7 VIP support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="">Get Started</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Growth</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                $39.99 / mo
              </span>
              <CardDescription className="text-sm">
                Ideal for businesses looking to expand their online presence.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Everything in Pro Plan",
                  "5GB Cloud Storage",
                  "Email and Chat Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
