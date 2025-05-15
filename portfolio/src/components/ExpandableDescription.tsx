"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

interface ExpandableDescriptionProps {
  isTextExpanded: boolean;
  toggleReadMore: () => void;
  paragraphContents: string[];
  truncateLength: number;
  fullTextContent: string;
  needsTruncation: boolean;
}

export const ExpandableDescription = ({
  isTextExpanded,
  toggleReadMore,
  paragraphContents,
  truncateLength,
  fullTextContent,
  needsTruncation,
}: ExpandableDescriptionProps) => {
  const textContentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className={`flex-1 flex flex-col justify-between px-6 md:px-10 pb-6 md:pb-8 ${
        !isTextExpanded && needsTruncation ? "overflow-hidden" : ""
      }`}
      initial={false}
      animate={{
        height: isTextExpanded || !needsTruncation ? "auto" : undefined,
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div ref={textContentRef} className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          {needsTruncation && !isTextExpanded ? (
            <motion.div
              key="truncated-text-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="text-gray-400 text-xs md:text-sm">
                {`${fullTextContent.substring(0, truncateLength)}...`}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="full-text-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {paragraphContents.map((text, index) => (
                <p
                  key={index}
                  className={`text-gray-400 text-xs md:text-sm ${
                    index > 0 ? "mt-2" : ""
                  }`}
                >
                  {text}
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {needsTruncation && (
        <button
          onClick={toggleReadMore}
          className="text-emerald-400 hover:text-emerald-300 text-xs md:text-sm mt-3 self-start flex-shrink-0"
        >
          {isTextExpanded ? "Close" : "Read more"}
        </button>
      )}
    </motion.div>
  );
};
