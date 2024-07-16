import { getArticleBySlug, getAllSlugs } from "../fetchers"

import { FC } from "react";

const generateStaticParams = async () => {
  return getAllSlugs();
};

type Props = {
  params: { slug: string };
};

const BlogPage: FC<Props> = async ({ params }) => {
  const { content } = await getArticleBySlug(params.slug);

  return (
    <article className="prose dark:prose-invert prose-h1:text-purple-400 prose-h2:text-blue-400 prose-h3:text-orange-400">
      {content}
    </article>
  );
};

export {
  generateStaticParams,
  BlogPage as default,
};
