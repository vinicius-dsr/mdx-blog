import { cn, formatDate } from "@/lib/utils";
import { ArrowRight, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Card } from "./ui/card";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export default function PostItem({
  slug,
  title,
  description,
  date,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 py-2">
      <Card className="p-5 flex flex-col gap-4">
        <div>
          <h2 className="md:text-2xl text-xl font-bold">
            <Link href={"/" + slug}>{title}</Link>
          </h2>
        </div>
        <div className="max-w-none text-muted-foreground md:text-base text-sm">
          {description}
        </div>
        <div className="flex justify-between items-center">
          <dl>
            <dt className="sr-only">Publicado em</dt>
            <dd className="text-sm md:text-base font-medium flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          <Link
            href={slug}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "py-0 flex gap-2"
            )}
          >
            Ler artigo <ArrowRight size={17} />
          </Link>
        </div>
      </Card>
    </article>
  );
}
