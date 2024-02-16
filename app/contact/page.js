"use client";
import React, { useState } from "react";
import { MotionDiv } from "@/components/Motion/MotionDiv";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited`");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: {
        email: formData.email,
      },
    });
  };
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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
        <button type="submit">Submit me</button>
      </form>
    </MotionDiv>
  );
};

export default Page;
