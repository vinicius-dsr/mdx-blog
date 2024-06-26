import { posts } from "#site/content";
import PostItem from "@/components/PostItem";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn, sortPosts } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../../config/site";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 6);
  return (
    <section className="flex flex-col mx-auto gap-4">
      <div className="md:h-[85vh] h-[70vh] mx-5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-600 flex flex-col items-center justify-center gap-4 text-center px-10">
        <h1 className="md:text-5xl text-white dark:text-primary text-3xl mx-auto font-black drop-shadow-md">
          🤠 Bem vindo ao meu blog 📓
        </h1>
        <p className="text-white/70 md:text-lg text-base font-medium">
          Projeto desenvolvido em NextJS 14, Velite, Tailwind CSS e Shadcn UI.
        </p>
        <div className="flex md:flex-row flex-col md:w-auto w-full gap-2 mt-8">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-xl font-medium"
            )}
          >
            Acessar blog
          </Link>
          <Link
            href={siteConfig.links.project}
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-xl font-medium"
            )}
          >
            Github
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-center font-black md:text-5xl text-3xl py-6">
          Postagens Recentes
        </h1>
        <ul className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-2">
          {latestPosts.map((post) => (
            <li key={post.slug} className="">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
        <Link href="/blog">
          <Button variant="ghost" className="flex gap-2 items-center mt-2">
            Ver mais postagens <ArrowRight size={17} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
