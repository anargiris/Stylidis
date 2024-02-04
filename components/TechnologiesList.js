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
            <Image src="/icons/nextjs.svg" width={20} height={20} />
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>NextJS</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/react.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>React</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/tailwindcss.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Tailwind</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/nodejs.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>NodeJS</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/javascript.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Javascript</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/supabase.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Supabase</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/vitejs.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Vite</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/git.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>Git</span>
          </TooltipContent>{" "}
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/html5.svg" width={20} height={20} />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent>
            <span>HTML</span>
          </TooltipContent>{" "}
        </Tooltip>{" "}
        <Tooltip>
          <TooltipTrigger>
            <Image src="/icons/css.svg" width={20} height={20} />{" "}
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
