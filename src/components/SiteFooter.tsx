import React from "react";
import { siteConfig } from "../../config/site";
import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer>
      <div className="container mx-auto py-10 md:py-0 md:h-20">
        <p className="text-center text-sm md:text-left">
          Built by {""}
          <Link
            href={siteConfig.links.X}
            className="underline underline-offset-4 font-Fmedium"
            target="_blank"
            rel="noreferrer"
          >
            achano
          </Link>
          . Hosted on {""}
          <Link
            href={"https://vercel.com"}
            className="underline underline-offset-4 font-Fmedium"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
