import Image from "next/image";
import Link from "next/link";
import ProjectLinkIcon from "./ProjectLinkIcon";
const ProjectComponent = ({ title, img, description, link }) => {
  return (
    <div className="flex bg-[#323232] dark:bg-zinc-100  text-[#f8f7ff] dark:text-[#323232] p-2.5 rounded-sm">
      <div className="relative h-32 w-1/4 overflow-hidden">
        <Image src={img} fill className="object-scale-down object-left-top" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-xl font-medium mb-1">{title}</h4>
          <Link href={link} target="_blank">
            <ProjectLinkIcon />
          </Link>
        </div>

        <p className="text-sm">{description}</p>
        <ol className="mt-auto flex items-center gap-1">
          <li>check</li>
        </ol>
      </div>
    </div>
  );
};

export default ProjectComponent;
