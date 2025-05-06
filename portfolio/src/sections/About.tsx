"use client";

import { Card } from "@/components/Card";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JavaScriptIcon from "@/assets/icons/javascript.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import VueIcon from "@/assets/icons/vue.svg";
import NuxtIcon from "@/assets/icons/nuxtjs.svg";
import PHPIcon from "@/assets/icons/php.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";

import TailwindIcon from "@/assets/icons/tailwind.svg";
import SassIcon from "@/assets/icons/sass.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";

import NodeJsIcon from "@/assets/icons/node.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import PostgreSQLIcon from "@/assets/icons/postgresql.svg";
import MySQLIcon from "@/assets/icons/mysql.svg";
import DynamoDBIcon from "@/assets/icons/dynamodb.svg";
import AWSIcon from "@/assets/icons/aws.svg";
import GoogleCloudIcon from "@/assets/icons/googlecloud.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GitIcon from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PostmanIcon from "@/assets/icons/postman.svg";

import StripeIcon from "@/assets/icons/stripe.svg";
import NpmIcon from "@/assets/icons/npm.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import { TechIcons } from "./TechIcons";

import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef, useEffect, useState } from "react";
import { useRandomWiggle } from "@/hooks/useRandomWiggle";

// zustand

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextJsIcon,
  },
  {
    title: "Vue",
    iconType: VueIcon,
  },
  {
    title: "Nuxt.js",
    iconType: NuxtIcon,
  },
  {
    title: "PHP",
    iconType: PHPIcon,
  },
  {
    title: "Laravel",
    iconType: LaravelIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Sass",
    iconType: SassIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CSSIcon,
  },
  {
    title: "Node.js",
    iconType: NodeJsIcon,
  },
  {
    title: "Express",
    iconType: ExpressIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "DynamoDB",
    iconType: DynamoDBIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSQLIcon,
  },
  {
    title: "MySQL",
    iconType: MySQLIcon,
  },
  {
    title: "AWS",
    iconType: AWSIcon,
  },
  {
    title: "Google Cloud",
    iconType: GoogleCloudIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
  {
    title: "Stripe",
    iconType: StripeIcon,
  },
  {
    title: "NPM",
    iconType: NpmIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "1%",
  },

  {
    title: "Traveling",
    emoji: "🌍",
    left: "25%",
    top: "33%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "70%",
    top: "1%",
  },
  {
    title: "Gym",
    emoji: "🏋️‍♂️",
    left: "70%",
    top: "45%",
  },

  {
    title: "Car Projects",
    emoji: "🚗",
    left: "50%",
    top: "29%",
  },
  {
    title: "Tech Tinkering",
    emoji: "💻",
    left: "40%",
    top: "60%",
  },
  {
    title: "Language Learning",
    emoji: "🈶",
    left: "28%",
    top: "5%",
  },
  {
    title: "Family time",
    emoji: "👨‍👩‍👧‍👦",
    left: "12%",
    top: "60%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const activeWiggle = useRandomWiggle({
    items: hobbies,
    wiggleDuration: 1000,
    pauseDuration: 1000,
  });

  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="About me"
          eyebrow="About me"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] col-span-2 md:col-span-2 lg:col-span-1">
              <CardHeader title="Github" description="My Github stats" />
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 ">
              <CardHeader title="Toolbox" description="My tools" />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:200s] "
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:200s] "
              />
            </Card>
          </div>
          <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the code"
              description="Here i want to list my hobbies"
              className=""
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-0.5 sm:gap-2 px-1.5 sm:px-3 md:px-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-white rounded-full py-0.5 sm:py-1 md:py-1.5 absolute text-[10px] sm:text-sm md:text-base scale-75 sm:scale-90 md:scale-100 cursor-grab active:cursor-grabbing"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    rotate: activeWiggle === hobby.title ? [-2, 2, -2] : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-gray-950 font-medium">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
