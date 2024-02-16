"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CodeBlock = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to recursively extract text from children
  const extractText = (node) => {
    if (typeof node === "string") {
      return node;
    } else if (React.isValidElement(node) && node.props) {
      if (Array.isArray(node.props.children)) {
        return node.props.children.map(extractText).join("");
      } else {
        return extractText(node.props.children);
      }
    }
    return "";
  };

  const codeString = extractText(children);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 500); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // Image transition animations
  const imageTransition = {
    opacity: isCopied ? 1 : 0.5,
    scale: isCopied ? 1.2 : 1,
    transition: { duration: 0.2 },
  };

  // Fancy text animation
  const textAnimation = {
    initial: { opacity: 0, y: 0, x: 0, rotate: 0 },
    animate: { opacity: 1, y: -20, x: 20, rotate: -10 },
    exit: { opacity: 0, y: -50, x: 50, rotate: -25 },
    transition: { duration: 1, ease: "easeIn" },
  };

  return (
    <div className="relative">
      {children}

      <motion.img
        className="absolute top-2 right-2 not-prose cursor-pointer"
        onClick={() => {
          if (!isCopied) copyToClipboard();
        }}
        src={isCopied ? "/icons/clipboardCheck.svg" : "/icons/clipboard.svg"}
        animate={imageTransition}
      />

      <AnimatePresence>
        {isCopied && (
          <motion.div
            className="absolute top-0 right-2 text-sm"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textAnimation}
          >
            Copied
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeBlock;
