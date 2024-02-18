import { MotionDiv } from "@/components/Motion/MotionDiv";
import TechnologiesList from "@/components/TechnologiesList";
import Link from "next/link";

export default function Home() {
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
      <section>
        <h1 className="text-2xl lg:text-4xl font-semibold mb-5">
          Hey, I&apos;m Anargyros.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 dark:from-indigo-200 to-purple-500 dark:to-purple-400 px-2">
            A web developer
          </span>
        </h1>

        <p className="text-base lg:text-xl mb-5 lg:w-2/3  text-zinc-800 dark:text-zinc-200">
          I enjoy the process of building web applications from the ground up. I
          believe communication and team work are the keys to success so I am
          trying to be the best possible person someone can work with.
        </p>
        <p className="text-base lg:text-xl mb-2.5 lg:w-2/3  text-zinc-800 dark:text-zinc-100">
          When working solo, I build and improve on the technologies that help
          me move fast.
        </p>
        <div>
          <p className="text-sm lg:text-base mb-4">
            Some of these technologies include:
          </p>
          <TechnologiesList />
        </div>
      </section>
      <section className="border-t border-[#323232] dark:border-[#f8f7ff] w-full mt-8 py-2">
        <h3 className="text-lg">
          I am self taught with professional experience since 2021.
        </h3>
        <a
          href="/Resume.docx"
          className="text-indigo-600 dark:text-indigo-400 font-medium"
        >
          Download my resume
        </a>
      </section>{" "}
      <section className="lg:text-lg lg:w-3/4 mt-3 py-1">
        I am currently building{" "}
        <Link
          target="_blank"
          className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#be4bdb] from-30% to-[#228be6]"
          href="https://documentor-smoky.vercel.app"
        >
          Documentor
        </Link>
        . A web app that lets users create documentation or even do onboarding
        easily. I am thinking of publishing it soon, but need to finish a bit
        more functionality. You can check it and even make a subscription in
        test mode.
      </section>
      <section className="mt-7">
        <h3 className="text-xl font-semibold leading-8">
          I bring{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-violet-400 px-1">
            small businesses
          </span>{" "}
          to the <span className="bg-indigo-600 px-1">digital world</span>
        </h3>
        <p>
          I can create the website your business deserves so you can share it
          with the world.
        </p>
        <p>
          If you need a website for your business, you can{" "}
          <Link
            className="text-indigo-600 dark:text-indigo-500"
            href="/contact"
          >
            contact
          </Link>{" "}
          me!
        </p>
      </section>
    </MotionDiv>
  );
}
