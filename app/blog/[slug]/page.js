import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blog_posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export default function Page({ params }) {
  function getPost(slug) {
    const markdownFile = fs.readFileSync(
      path.join("blogs", slug + ".mdx"),
      "utf-8"
    );

    const { data: frontMatter, content } = matter(markdownFile);

    return {
      frontMatter,
      slug,
      content,
    };
  }
  const props = getPost(slug);
  return <div>Hello from the blog post page.</div>;
}
