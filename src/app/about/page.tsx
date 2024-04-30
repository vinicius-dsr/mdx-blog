import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "../../../config/site";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="container max-w-screen-lg mx-auto flex flex-col gap-4">
      <div className="rounded-xl flex flex-col items-center gap-2 py-10 bg-gradient-to-r from-slate-900 to-slate-600">
        <h1 className="md:text-5xl text-white dark:text-primary text-4xl mx-auto font-black drop-shadow-md">
          Sobre 📓
        </h1>
        <p className="text-white/70 md:text-lg text-base font-medium">
          Autor - Blog
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-4 mx-auto w-full items-center justify-center">
        <div className="border rounded-md md:w-[30%] w-full flex flex-col items-center text-center p-5 gap-2">
          <Avatar className="w-28 h-28">
            <AvatarImage src="/perfil.png" />
            <AvatarFallback>VR</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-black mt-2">Vinícius Reis</h1>
          <p className="text-base font-medium">
            Desenvolvedor Frontend & Apaixonado por tecnologia
          </p>
          <div className="flex gap-1 mt-2">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
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
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
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
          <Link
            href={siteConfig.links.personalSite}
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full mt-2 font-semibold flex gap-2"
            )}
          >
            Site Pessoal <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="border rounded-md md:w-[70%] w-full px-6 py-[65px] flex flex-col items-center gap-4 ">
          <h1 className="text-3xl font-black">MDX Blog</h1>
          <p className="text-base font-medium text-justify">
            Projeto desenvolvido por mim, no intuito de praticar e testar meus
            conhecimentos. A ideia é postar como artigos minhas anotações de
            estudos e projetos, com eu faço minhas anotações no Obsidian, achei
            pertinente criar uma blog que leia arquivos Markdown, para isso usei
            o Velite. A aplicação é construída em NextJS na versão 14, UI com
            Shadcn e estilização com Tailwind.
          </p>
          <div className="flex gap-2 items-center justify-center mt-2">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Blog
            </Link>
            <Link
              href={siteConfig.links.project}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Github do projeto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
