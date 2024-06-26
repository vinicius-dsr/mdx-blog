import Link from "next/link";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { siteConfig } from "../../config/site";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 w-full items-center py-10 border-t mt-5">
      <span>
        Desenvolvido com 💙 por{" "}
        <Link
          href={siteConfig.links.personalSite}
          target="_blank"
          rel="noreferrer"
        >
          Vinícius Reis
        </Link>
      </span>
      <div className="flex gap-2">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-10 px-0 rounded-full"
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
              buttonVariants({ variant: "outline" }),
              "w-10 px-0 rounded-full"
            )}
          >
            <Icons.instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </div>
        </Link>
        <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-10 px-0 rounded-full"
            )}
          >
            <Icons.linkedin className="h-6 w-6" />
            <span className="sr-only">Linkedin</span>
          </div>
        </Link>
      </div>
    </footer>
  );
}
