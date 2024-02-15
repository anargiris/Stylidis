"use client";
import Image from "next/image";
import React, { useState } from "react";

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
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative">
      {children}

      {isCopied ? (
        <img
          className="absolute top-2 right-2 not-prose "
          src="/icons/clipboardCheck.svg"
        />
      ) : (
        <img
          className="absolute top-2 right-2 not-prose cursor-pointer"
          onClick={() => copyToClipboard(children)}
          src="/icons/clipboard.svg"
        />
      )}
    </div>
  );
};

export default CodeBlock;
