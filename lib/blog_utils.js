import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getBlogPost = (slug) => {
  const markdownFile = fs.readFileSync(
    path.join("blog_posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
};
