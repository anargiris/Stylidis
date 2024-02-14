import Link from "next/link";
import { MotionDiv } from "@/components/Motion/MotionDiv";
import { getBlogPosts } from "@/lib/blog_utils";
const Blog = async () => {
  const blogs = getBlogPosts();
  return (
    <MotionDiv
      initial={{
        opacity: 0,
        y: 2,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      }}
    >
      <div>
        {blogs.map((blog) => (
          <Link href={"/blog/" + blog.slug} key={blog.slug}>
            <div className="py-2  flex justify-between items-end gap-2 border-b border-zinc-400">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {blog.meta.title}
                </h3>
                <p className="text-sm text-zinc-800 dark:text-zinc-200">
                  {blog.meta.description}
                </p>
              </div>
              <div className="text-sm text-indigo-700 dark:text-indigo-200">
                <p>{blog.meta.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MotionDiv>
  );
};

export default Blog;
