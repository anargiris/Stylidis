import React from "react";
import { MotionDiv } from "@/components/Motion/MotionDiv";
import ProjectComponent from "@/components/ProjectComponent";

export const metadata = {
  title: "Work",
  description:
    "A list of all the work I have done as a solo dev, as a part of a company and for some clients.",
};

const page = () => {
  return (
    <MotionDiv
      className="pb-10"
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
      <h1 className="text-xl font-medium mb-1">
        Some of the work I have done in my career so far.
      </h1>
      <h2>
        I am currently{" "}
        <span className="text-indigo-500 dark:text-indigo-400">
          available for hire
        </span>{" "}
        and looking for my next career step.
      </h2>

      <section className="mt-12 mb-2">
        <h3 className="text-2xl font-medium border-b border-[#323232] dark:border-[#f8f7ff]">
          Solo
        </h3>
        <p className="text-sm mt-2 mb-6">
          Solo projects that I am currently building or have built in the past.
        </p>
        <div className="flex flex-col gap-8">
          <ProjectComponent
            title="Documentor"
            img="/project_pictures/Documentor.png"
            description="A web app that lets users create and share documentation easily. Users can do other stuff on it such as do onboarding or provide smooth experiences giving information to people. Still a work in progress but pretty to close to launching it."
            link="https://documentor-smoky.vercel.app/"
          />{" "}
          <ProjectComponent
            title="Legacy Portfolio"
            img="/project_pictures/Documentor.png"
            description="A portfolio I built aiming at doing some freelancing work while also showcasing some frontend development skills. I used this website on cold emails to clients and as a general portfolio when applying for my first job in tech."
            link="https://stylidis.vercel.app/"
          />
        </div>
      </section>
    </MotionDiv>
  );
};

export default page;
