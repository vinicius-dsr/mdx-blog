import Link from "next/link";
import { Icons } from "./Icons";
import { siteConfig } from "../../config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 justify-between max-w-screen-xl items-center">
        <Link href="/" className="flex items-center gap-1">
          <Icons.logo className="h-10 w-10" />
          <span className="font-bold">Blog</span>
        </Link>

        <MainNav />

        <div className="flex items-center gap-1">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-10 px-0 hidden sm:inline-flex"
              )}
            >
              <Icons.github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-10 px-0 hidden sm:inline-flex"
              )}
            >
              <Icons.instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </div>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
