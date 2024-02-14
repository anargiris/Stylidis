"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mb-8">
      <ol className="flex justify-center items-center gap-4">
        {["/", "/work", "/blog", "/contact"].map((link) => {
          const isActive = pathname.startsWith(`${link}/`) || pathname === link;
          return (
            <Link
              key={link}
              className={`px-3 py-1 rounded-lg text-sm lg:text-base relative no-underline duration-300 ease-in ${
                !isActive
                  ? "text-[#323232] dark:text-[#f8f7ff]"
                  : "text-[#f8f7ff] dark:text-[#323232]"
              }`}
              data-active={isActive}
              href={link}
            >
              <span className="first-letter:uppercase block">
                {link === "/" ? "home" : link.slice(1)}
              </span>
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full w-full mx-auto dark:bg-[#f8f7ff] bg-[#323232] rounded-md -z-10 "
                  layoutId="navbar"
                  aria-hidden="true"
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    duration: 0.5,
                  }}
                />
              )}
            </Link>
          );
        })}
      </ol>
    </nav>
  );
};

export default Navbar;
