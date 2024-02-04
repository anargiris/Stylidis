import { MotionDiv } from "@/components/Motion/MotionDiv";

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
      <h1 className="text-xl font-medium mb-2">
        Hey, I'm Anargyros. A web developer.
      </h1>
      <h2>I build web applications and sometimes they don't break.</h2>
    </MotionDiv>
  );
}
