import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import MainNav from "@/components/MainNav";
import { marketingConfig } from "../../../config/marketing";
import SiteFooter from "@/components/SiteFooter";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="container mx-auto z-40 bg-background pl-2 pr-2">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4",
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};

export default MarketingLayout;
