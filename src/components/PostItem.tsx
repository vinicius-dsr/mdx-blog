import { cn, formatDate } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
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
      <Card className="p-5">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Publicado em</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Ler artigo
        </Link>
      </div>
      </Card>
    </article>
  );
}
