import { posts } from "#site/content";
import PostItem from "@/components/PostItem";
import QueryPagination from "@/components/QueryPagination";
import { Card } from "@/components/ui/card";
import { sortPosts } from "@/lib/utils";

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <section className="flex flex-col mx-auto container">
      <div className="container py-20 max-w-screen-lg h-[30vh] flex flex-col text-center justify-center items-center gap-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-600">
        <h1 className="font-black text-4xl lg:text-5xl drop-shadow-md text-white dark:text-primary">
          Bem vindo ao meu blog 📓
        </h1>
        <p className="text-xl text-white/70 font-medium drop-shadow-md">
          Projetos e estudos de desenvolvimento web.
        </p>
      </div>

      <div className="container px-0 max-w-screen-lg lg:py-10 md:mt-2 mt-5">
        {displayPosts?.length > 0 ? (
          <ul className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 mb-5">
            {displayPosts.map((post) => {
              const { slug, date, title, description } = post;
              return (
                <li key={slug}>
                  <PostItem
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nada para ver aqui ... </p>
        )}
        <QueryPagination totalPages={totalPages} />
      </div>
    </section>
  );
}
