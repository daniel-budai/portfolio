import { Card } from "@/components/Card";
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

import AWSIcon from "@/assets/icons/aws.svg";
import GoogleCloudIcon from "@/assets/icons/googlecloud.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GitIcon from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";

import StripeIcon from "@/assets/icons/stripe.svg";
import NpmIcon from "@/assets/icons/npm.svg";
import { TechIcons } from "./TechIcons";

// Postman, dyanamoDB, zustand, express,

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
    title: "Nuxt",
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
    title: "MongoDB",
    iconType: MongoDBIcon,
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
    title: "Stripe",
    iconType: StripeIcon,
  },
  {
    title: "NPM",
    iconType: NpmIcon,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        title="About me"
        eyebrow="About me"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <Image src={bookImage} alt="Book" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <span>
                  <TechIcons component={item.iconType} />
                </span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
