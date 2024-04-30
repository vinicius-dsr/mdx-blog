"use client";

import { AlignRight } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./Icons";
import { siteConfig } from "../../config/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="w-10 px-0 sm:hidden">
          <AlignRight className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center gap-1"
        >
          <Icons.logo className="h-10 w-10" />
          <span className="font-bold text-xl">Blog</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-4">
          <MobileLink onOpenChange={setOpen} href="/blog" className="font-sm">
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/about" className="font-sm">
            Sobre
          </MobileLink>
        </div>
        <div className="flex gap-2 mt-7">
          <MobileLink onOpenChange={setOpen} href={siteConfig.links.github}>
            <Icons.github className="px-0 h-6 w-6" />
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href={siteConfig.links.instagram}>
            <Icons.instagram className="px-0 h-6 w-6" />
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href={siteConfig.links.linkedin}>
            <Icons.linkedin className="px-0 h-6 w-6" />
          </MobileLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
