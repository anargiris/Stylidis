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
          <Link href={"/blog/" + blog.slug} passHref key={blog.slug}>
            <div className="py-2 flex justify-between align-middle gap-2">
              <div>
                <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                <p className="text-gray-400">{blog.meta.description}</p>
              </div>
              <div className="my-auto text-gray-400">
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
