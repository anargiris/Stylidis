import fs from "fs";
import path from "path";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost } from "@/lib/blog_utils";
import "@/styles/highlight-js/github-dark.css";
import SmallCodeBlock from "@/components/SmallCodeBlock";
import CodeBlock from "@/components/CodeBlock";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blog_posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export async function generateMetadata({ params }) {
  const { frontMatter: metadata } = getBlogPost(params.slug);

  const image = `https://stylidis.io/${metadata.image}`;

  console.log("blog metadata is", image);
  return {
    title: metadata.title,
    description: metadata.description,
    publishedAt: metadata.date,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      publishedTime: metadata.date,
      url: `https://stylidis.io/blog/${params.slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [image],
    },
  };
}

const components = {
  SmallCodeBlock,
  CodeBlock,
  a(props) {
    return (
      <a
        target="_blank"
        className="text-indigo-500 no-underline font-medium"
        {...props}
      />
    );
  },
};

export default function Page({ params }) {
  const props = getBlogPost(params.slug);
  return (
    <div>
      <article className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert mx-auto ">
        <MDXRemote
          source={props.content}
          options={options}
          components={components}
        />
      </article>
    </div>
  );
}
