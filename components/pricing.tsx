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
import { ProductPricing } from "@/app/actions/Productaction";

export default async function Pricing() {
  const features = [
    [
      "3 social media platforms",
      "12 posts per month",
      "Basic content creation",
      "Monthly performance report",
      "Email support",
    ],
    [
      "All social media platforms",
      "30 posts per month",
      "Premium content creation",
      "Weekly performance reports",
      "Full community management",
      "Complete website management",
      "Social media advertising",
      "24/7 VIP support",
    ],
    ["Everything in Pro Plan", "5GB Cloud Storage", "Email and Chat Support"],
  ];
  const underprice: string[] = [
    "Perfect for small businesses just getting started with social media.",
    "Comprehensive solution for established businesses seeking maximum impact.",
    "Ideal for businesses looking to expand their online presence.",
  ];
  const products = await ProductPricing();

  const pricing = {
    features,
    underprice,
    products,
  };
  const planNames = ["Starter", "Pro", "Enterprise"]; // Added plan names
  return (
    <section className="py-16 md:py-32" id="pricing">
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
          {pricing.features.map((featureList, index) => (
            <Card className="flex flex-col" key={`card-${index}`}>
              <CardHeader>
                <CardTitle className="font-medium" key={index}>
                  {planNames[index]}
                </CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  {pricing.products[index]?.price || "$XX"}
                </span>
                <CardDescription className="text-sm">
                  {pricing.underprice[index]}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {featureList.map((feature, featureIndex) => (
                    <li
                      key={`feature-${index}-${featureIndex}`}
                      className="flex items-center gap-2"
                    >
                      <Check className="size-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/checkout/${products[index]?.id}`}>
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
