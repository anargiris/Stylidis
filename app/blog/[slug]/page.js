import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost } from "@/lib/blog_utils";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blog_posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export async function generateMetadata({ params }) {
  const blog = getBlogPost(params.slug);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

export default function Page({ params }) {
  const props = getBlogPost(params.slug);
  return (
    <div>
      Hello from the blog post page.
      <div>
        <MDXRemote source={props.content} />
      </div>
    </div>
  );
}
