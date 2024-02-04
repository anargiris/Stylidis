import React from "react";
import { MotionDiv } from "@/components/Motion/MotionDiv";

export const metadata = {
  title: "Work",
  description:
    "A list of all the work I have done as a solo dev, as a part of a company and for some clients.",
};

const page = () => {
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
      page
    </MotionDiv>
  );
};

export default page;
