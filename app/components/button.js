"use client";

import { useState } from "react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const textToCopy = "kazimaliacad@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 cursor-pointer py-2 rounded-lg mt-10 bg-teal-500 text-white hover:bg-teal-700 transition-all"
    >
      {copied ? "Copied!" : "Copy My Email"}
    </button>
  );
}
