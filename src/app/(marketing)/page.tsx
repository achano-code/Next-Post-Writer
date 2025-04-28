import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MarketingPage = () => {
  return (
    <>
      <section className="pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32">
        <div className="container mx-auto text-center flex flex-col items-center">
          <Link
            href={"/"}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground py-1 leading-normal max-w-[42rem] sm:text-xl md:text-2xl lg:text-3xl">
            このアプリケーションはNext.js AppRouterで作られたものです。
            ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={"/"}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketingPage;
