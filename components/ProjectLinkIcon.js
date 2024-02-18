"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ProjectLinkIcon = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15px"
      height="15px"
      viewBox="0 0 21 21"
    >
      {isMounted && (
        <path
          fill="none"
          stroke={theme === "dark" ? "#fff" : "#323232"}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.5 8.5v-5h-5m5 0l-7 7m-1-7h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4"
        ></path>
      )}
    </svg>
  );
};

export default ProjectLinkIcon;
