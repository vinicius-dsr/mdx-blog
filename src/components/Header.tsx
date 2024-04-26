import Link from "next/link";
import { Icons } from "./Icons";
import { siteConfig } from "../../config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import ModeToggle from "./ModeToggle";

export default function Header() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-lg items-center">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1">
            <Icons.logo className="h-16 w-16" />
            <span className="font-bold text-2xl">Blog</span>
          </Link>
          <MainNav />
        </div>

        

        <div className="flex flex-1 items-center gap-1 justify-end">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-10 px-0 rounded-full hidden sm:inline-flex"
              )}
            >
              <Icons.github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
