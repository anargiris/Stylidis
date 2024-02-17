"use client";
import { MotionDiv } from "./Motion/MotionDiv";
import ThemeButton from "./ThemeButton";
import Github from "./icons/Github";
import X from "./icons/X";
import LinkedIn from "./icons/LinkedIn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
const staggerDuration = 0.03; // 30ms
const Header = () => {
  const { theme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const itemAnimation = (delay) => {
    return {
      initial: {
        opacity: 0,
        y: 10,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: staggerDuration * delay, // No delay for the first item
        },
      },
    };
  };
  return (
    <header className="h-12 max-w-5xl mx-auto w-full flex items-center justify-between">
      {isMounted && (
        <div className="flex items-center gap-3">
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={itemAnimation(0)}
          >
            <Link target="_blank" href="https://www.linkedin.com/in/astylidis/">
              <LinkedIn theme={theme} />
            </Link>
          </MotionDiv>
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={itemAnimation(4)}
          >
            <Link target="_blank" href="https://github.com/anargiris/">
              <Github theme={theme} />
            </Link>
          </MotionDiv>
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={itemAnimation(8)}
          >
            <Link target="_blank" href="https://twitter.com/AStylidis">
              <X theme={theme} />
            </Link>
          </MotionDiv>
        </div>
      )}

      <ThemeButton />
    </header>
  );
};

export default Header;
