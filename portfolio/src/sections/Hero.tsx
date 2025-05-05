/* eslint-disable react/no-unescaped-entities */
import memojiImagehero from "@/assets/images/memoji-computer-hero.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_20%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/*   spinDuration?: string;
  shouldSpin?: boolean;
  shouldOrbit?: boolean;
  orbitDuration?: string;*/}

        <HeroOrbit
          size={430}
          rotation={-15}
          shouldSpin={true}
          spinDuration="30s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldSpin={true}
          spinDuration="32s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit={true}
          orbitDuration="34s"
        >
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit={true}
          orbitDuration="36s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit={true}
          orbitDuration="38s"
          shouldSpin={true}
          spinDuration="70s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit={true}
          orbitDuration="40s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit={true}
          orbitDuration="42s"
        >
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={143}
          shouldOrbit={true}
          orbitDuration="44s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit={true}
          orbitDuration="46s"
        >
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit={true}
          orbitDuration="48s"
          shouldSpin={true}
          spinDuration="60s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImagehero}
            className="size-[100px]"
            alt="Person holding a computer"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-large">
            <div className="bg-green-500 size-2.5 rounded-full relative ">
              <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Full-Stack Developer ready for new challenges
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Currently looking for a software developer position. Let's work
            together to build something great!
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-medium">Explore my work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Lets connect</span>
        </button>
      </div>
    </div>
  );
};
