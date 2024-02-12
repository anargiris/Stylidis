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
      <h1 className="text-xl w-2/3 font-medium ">
        Some of the work I have done in my career so far.
      </h1>
      <h2 className="mb-5 text-sm text-zinc-700 dark:text-zinc-300">
        Includes projects I have been part of as a team or as a solo dev.
      </h2>
      <h3>
        I am currently{" "}
        <span className="text-indigo-500 dark:text-indigo-400">
          available for hire
        </span>{" "}
        and looking for my next career step.
      </h3>

      <section className="mt-12 mb-2">
        <div className="flex flex-col gap-8">
          <ProjectComponent
            title="Documentor"
            img="/project_pictures/Documentor.png"
            description="A web app that lets users create and share documentation easily. Users can do other stuff on it such as do onboarding or provide smooth experiences giving information to people. Still a work in progress but pretty to close to launching it."
            link="https://documentor-smoky.vercel.app/"
          />
          <ProjectComponent
            title="Legacy Portfolio"
            img="/project_pictures/Legacy.png"
            description="A portfolio I built aiming at doing some freelancing work while also showcasing some frontend development skills. I used this website on cold emails to clients and as a general portfolio when applying for my first job in tech."
            link="https://stylidis.vercel.app/"
          />
          <ProjectComponent
            title="ANMB"
            img="/project_pictures/anmb.png"
            description="A fully fledged web application for a dance organization in Italy. Was part of the frontend team building the website and the cms for the organization while also working with the backend team implementing new features and testing."
            link="https://anmb.org/"
          />
          <ProjectComponent
            title="Chestnut Modifications Business"
            img="/project_pictures/chestnut.png"
            description="A project for a local business doing chestnut wood modification deliveries. This was my first real world project and the one where semantic HTML was important, leading to high Google ranking on the main Greek keywords. This has helped the business get more clients from all around Greece and Cyprus."
            link="https://ksiliaefthimiou.gr/"
          />{" "}
          <ProjectComponent
            title="D4RE"
            img="/project_pictures/dare.png"
            description="Real estate web app based in Italy. I was in charge of implenting new features and enhancing existing ones while also refactoring some of the code the old team had written."
            link="https://www.d4re.com/"
          />{" "}
          <ProjectComponent
            title="House construction business"
            img="/project_pictures/construction.png"
            description="Another client project that I worked on as a solo dev. It is a local home construction business that had the need to enter the digital world. Website helped the business reach a wider audience and get more leads."
            link="https://www.dimitrakoudas.gr/"
          />
        </div>
      </section>
      <section className="mt-10">
        There is even more projects that I have worked
      </section>
    </MotionDiv>
  );
};

export default page;
