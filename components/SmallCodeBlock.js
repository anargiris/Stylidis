import React from "react";

const SmallCodeBlock = ({ content }) => {
  return (
    <span className="border border-zinc-600 dark:border-zinc-300 bg-zinc-800 text-indigo-300 p-1 text-xs rounded-lg">
      {content}
    </span>
  );
};

export default SmallCodeBlock;
