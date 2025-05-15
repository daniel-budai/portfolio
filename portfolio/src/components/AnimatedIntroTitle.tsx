"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const AnimatedIntroTitle = () => {
  const [helloTyped, setHelloTyped] = useState(false);
  const [emojiVisible, setEmojiVisible] = useState(false);
  const [nameTypingTrigger, setNameTypingTrigger] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-x-1">
      <div className="whitespace-nowrap">
        {!helloTyped ? (
          <TypeAnimation
            sequence={[
              "Hello",
              700,
              () => {
                setHelloTyped(true);
                setEmojiVisible(true);
                setTimeout(() => {
                  setNameTypingTrigger(true);
                }, 300);
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
            speed={40}
            className="inline-block"
          />
        ) : (
          <span className="inline-block">Hello</span>
        )}

        {emojiVisible && (
          <motion.span
            className="inline-block ml-1"
            animate={{ rotate: [0, 20, -10, 20, -10, 0], y: [0, -4, 0] }}
            transition={{
              rotate: {
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1,
                repeatDelay: 0.7,
              },
              y: {
                duration: 0.4,
                repeat: Infinity,
                yoyo: Infinity,
                ease: "easeInOut",
                delay: 0.1,
                repeatDelay: 0.9,
              },
            }}
          >
            👋
          </motion.span>
        )}
      </div>
      <div
        className={`
          block lg:inline-block
          mt-[0.25em] lg:mt-0
          ${nameTypingTrigger ? "" : "min-h-[2.25rem] lg:min-h-0"}
        `}
      >
        {nameTypingTrigger && (
          <TypeAnimation
            sequence={[300, "I'm Daniel Budai"]}
            wrapper="span"
            cursor={true}
            repeat={0}
            speed={40}
            className="inline-block"
          />
        )}
      </div>
    </div>
  );
};
