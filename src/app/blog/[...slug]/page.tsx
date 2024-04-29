import { posts } from "#site/content";
import { MDXContent } from "@/components/MdxComponents";
import { notFound } from "next/navigation";

import "../../../../styles/mdx.css";
import { formatDate } from "@/lib/utils";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article>
      <div className="container max-w-screen-lg mx-auto rounded-xl flex flex-col gap-2 py-8 items-center text-center bg-gradient-to-r from-slate-900 to-slate-600 ">
        <h1 className="font-bold drop-shadow-md text-3xl text-white dark:text-primary">
          {post.title}
        </h1>
        {post.description ? (
          <>
            <p className="text-lg text-white/70 font-medium drop-shadow-md">
              {post.description}
            </p>
            <time
              className="text-sm text-muted-foreground"
              dateTime={post.date}
            >
              {formatDate(post.date)}
            </time>
          </>
        ) : null}
      </div>
      <div className="container py-6 prose dark:prose-invert max-w-screen-lg mx-auto">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
