import { MotionDiv } from "@/components/Motion/MotionDiv";
import TechnologiesList from "@/components/TechnologiesList";

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
        <h1 className="text-2xl font-semibold mb-1">
          Hey, I'm Anargyros. A web developer.
        </h1>
        <h2 className="mb-5 text-lg">
          I build web applications and sometimes they don't break.
        </h2>
        <p className="mb-5 w-2/3">
          I am a constant follower of the rapidly evolving ecosystem of web
          development and adapt to the latest changes. My main focus is on the
          frontend but have good experience on the backend too.
        </p>
        <div>
          <p className="text-sm mb-2">
            Some of the technologies I like to use:
          </p>
          <TechnologiesList />
        </div>
      </section>
      <section className="border-t border-[#323232] dark:border-[#f8f7ff] w-full mt-8 py-1">
        <h3>I am self taught with professional experience since 2021.</h3>
      </section>
    </MotionDiv>
  );
}
