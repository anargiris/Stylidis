import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TechnologiesList = () => {
  return (
    <div className="flex items-center gap-2">
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="Nextjs Icon"
              src="/icons/nextjs.svg"
              width={20}
              height={20}
            />
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>NextJS</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="React Icon"
              src="/icons/react.svg"
              width={20}
              height={20}
            />{" "}
          </TooltipTrigger>
          <TooltipContent>
            <span>React</span>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="Tailwind Icon"
              src="/icons/tailwindcss.svg"
              width={20}
              height={20}
            />{" "}
          </TooltipTrigger>
          <TooltipContent>
            <span>Tailwind</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="NodeJS Icon"
              src="/icons/nodejs.svg"
              width={20}
              height={20}
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>NodeJS</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="Javascript Icon"
              src="/icons/javascript.svg"
              width={20}
              height={20}
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Javascript</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="Supabase Icon"
              src="/icons/supabase.svg"
              width={20}
              height={20}
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Supabase</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="ViteJS Icon"
              src="/icons/vitejs.svg"
              width={20}
              height={20}
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Vite</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image alt="Git Icon" src="/icons/git.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Git</span>
          </TooltipContent>{" "}
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="HTML5 Icon"
              src="/icons/html5.svg"
              width={20}
              height={20}
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>HTML</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt="CSS3 Icon"
              src="/icons/css.svg"
              width={20}
              height={20}
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>CSS</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
      </TooltipProvider>
      <span className="text-xs">and many others..</span>
    </div>
  );
};

export default TechnologiesList;
