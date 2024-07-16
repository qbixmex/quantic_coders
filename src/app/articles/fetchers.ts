import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDir = path.join(process.cwd(), "src/app/articles/_mdx-content");

const getArticleBySlug = async (slug: string) => {
  const fileName = slug + ".mdx"
  const filePath = path.join(contentDir, fileName)
  const fileContent = fs.readFileSync(filePath, "utf8")

  const { frontmatter, content } = await compileMDX<{
    title: string;
    author: string;
    publishDate: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  return {
    frontMatter: frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
};

const getArticles = async () => {
  const files = fs.readdirSync(contentDir)
  const articles = await Promise.all(
    files.map(async (file) => await getArticleBySlug(path.parse(file).name)),
  );
  return articles;
};

const getAllSlugs = () => {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
};

export {
  getArticleBySlug,
  getArticles,
  getAllSlugs,
};