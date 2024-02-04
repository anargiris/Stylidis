"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 10,
};

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const variants = {
    initial: { scale: 0.6, rotate: 60 },
    animate: { scale: 1, rotate: 0, transition },
    whileTap: { scale: 0.75, rotate: 25 },
  };
  //This section of the code is to prevent any hydration mismatch errors. Maybe a future version of NextJS fixes this
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  //
  return (
    <div>
      {theme === "dark" ? (
        <motion.button
          initial="initial"
          animate="animate"
          whileTap="whileTap"
          variants={variants}
          onClick={() => setTheme("light")}
        >
          <SunIcon />
        </motion.button>
      ) : (
        <motion.button
          initial="initial"
          animate="animate"
          whileTap="whileTap"
          variants={variants}
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
        </motion.button>
      )}
    </div>
  );
};

export default ThemeButton;
