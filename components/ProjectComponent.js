import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ProjectLinkIcon from "./ProjectLinkIcon";
const ProjectComponent = ({ title, img, description, link }) => {
  return (
    <div className="flex flex-col md:flex-row dark:text-[#f8f7ff] text-[#323232] py-2.5 rounded-sm gap-5">
      <div className="relative md:w-1/5  overflow-hidden rounded-md">
        <AspectRatio ratio={16 / 9}>
          <Image alt={`Picture for project: ${title}`} src={img} fill />
        </AspectRatio>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-xl font-semibold mb-1 text-indigo-700 dark:text-indigo-400">
            {title}
          </h4>
          <Link href={link} target="_blank">
            <ProjectLinkIcon />
          </Link>
        </div>

        <p className="text-sm">{description}</p>
        {/* <ol className="mt-auto flex items-center gap-1">
          <li>check</li>
        </ol> */}
      </div>
    </div>
  );
};

export default ProjectComponent;
