import Link from "next/link";
import { getArticles } from "./fetchers";

const MDXPage = async () => {
  const articles = await getArticles();

  return (
    <>
      {articles.map((article) => (
        <article key={article.slug}>
          <h1 className="text-2xl dark:text-purple-400 mb-3">{article.frontMatter.title}</h1>
          <p className="text-slate-300">Author: {article.frontMatter.author}</p>
          <p className="text-slate-300">Published Date: {article.frontMatter.publishDate}</p>
          <p className="text-right">
            <Link
              className="text-sky-400 font-bold underline"
              href={`/articles/${article.slug}`}
            >Go to the article</Link>
          </p>
        </article>
      ))}
    </>
  );
};

export default MDXPage;
