"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";



export default function HeroSection() {
  const members = [
    {
      name: "Adnane EL Otmani",
      role: "Co-Founder UI/UX",
      avatar: "/adnane.png",
    },
    {
      name: "Ayoube El Hrichi",
      role: "Co-founder and CEO",
      avatar: "/ayoub.jpg",
    },
    {
      name: "Ismail Meknassi",
      role: "developper",
      avatar: "/ismail.jpg",
    },
  ];

  return (
    <>
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
                <Link
                  href="/"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">Introduction MNTAgency</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl xl:text-6xl xl:[line-height:1.125]">
                  We Turn Likes Into Leads
                </h1>
                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                  Data-driven social media strategies for brands that want to
                  stand out.
                </p>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/">
                      <Rocket className="relative size-4" />
                      <span className="text-nowrap">Meet the Team</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mt-16">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
            </div>
          </div>
        </section>
        <section>
          <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
              <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  Tailark in numbers
                </h2>
                <p>
                  We don&apos;t just create content—we craft strategies that drive
                  real business results. Our approach combines data-driven
                  insights with creative storytelling to build authentic
                  communities around your brand.
                </p>
              </div>

              <div className="grid gap-0.5 *:text-center md:grid-cols-3">
                <div className="rounded-(--radius) space-y-4 border py-12">
                  <div className="text-5xl font-bold">+120</div>
                  <p>Stars on GitHub</p>
                </div>
                <div className="rounded-(--radius) space-y-4 border py-12">
                  <div className="text-5xl font-bold">56%</div>
                  <p>Conversion rate</p>
                </div>
                <div className="rounded-(--radius) space-y-4 border py-12">
                  <div className="text-5xl font-bold">+20</div>
                  <p>Powered Apps</p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="py-12 md:py-32">
          <div className="mx-auto max-w-3xl px-8 lg:px-0">
            <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">
              Our team
            </h2>

            <div>
              <h3 className="mb-6 text-lg font-medium">Leadership</h3>
              <div className="grid grid-cols-2 gap-3 border-t py-6 md:grid-cols-3">
                {members.map((member, index) => (
                  <div key={index}>
                    <div className="bg-background size-40 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                      <Image
                        className="aspect-square rounded-full object-cover"
                        src={member.avatar}
                        alt={member.name}
                        height="860"
                        width="860"
                        loading="lazy"
                      />
                    </div>
                    <span className="mt-2 block text-sm">{member.name}</span>
                    <span className="text-muted-foreground block text-xs">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
