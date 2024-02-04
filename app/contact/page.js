import React from "react";
import { MotionDiv } from "@/components/Motion/MotionDiv";

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
