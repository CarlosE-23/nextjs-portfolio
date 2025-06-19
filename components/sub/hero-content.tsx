"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGhData } from "@/app/context/GhDataContext";
import { SliderInfinite } from "@/components/sub/sliderInfinite";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const ghData = useGhData();
  const images = [
    "/skills/html.png",
    "/skills/css.png",
    "/skills/js.png",
    "/skills/ts.png",
    "/skills/redux.png",
    "/skills/react.png",
    "/skills/reactnative.png",
    "/skills/node.png",
    "/skills/express.png",
    "/skills/electron.png",
    "/skills/next.png",
    "/skills/postgres.png",
    "/skills/mysql.png",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col xl:flex-row items-center justify-center px-8 md:px-24 mt-40 w-full z-[20] overflow-hidden"
    >
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative min-w-[600px]"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none min-w-[600px]"
        />
        <Image
          src={"/me.png"} // ghData.avatar_url
          alt="me"
          height={350}
          width={350}
          draggable={false}
          className="select-none absolute avatar min-w-[350px]"
        />
      </motion.div>

      <div
        className="h-full w-full flex flex-col gap-5 justify-center text-start
        backdrop-blur-md bg-white/1 border border-transparent p-5 sm:p-10 lg:p-20
        border-gradient-to-r from-blue-500 to-purple-500 max-w-[880px]
        intermitent-border"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-6xl md:text-4xl sm:text-2xl text-bold text-white w-auto h-auto rounded-[50px]"
        >
          <span className="text-xs sm:text-sm">
            <code className="text-red-400">{"<span>"}</code>
            <code>
              Hey! I&apos;m {ghData.name}
              <span className="intermitent-typewriting"></span>
            </code>
            <code className="text-red-400">{"</span>"}</code>{" "}
          </span>
          <span className="text-lg sm:text-2xl md:text-4xl lg:text-6xl">
            Junior{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {"{ Full Stack }"}
            </span>{" "}
            <span className="">Web Developer</span>
          </span>
        </motion.div>

        <motion.span
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">React / Node</h1>
        </motion.span>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm lg:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          <code className="text-red-400">{"<p>"}</code>
          <code>
            Full Stack Developer with React and Node.js since 2023, passionate
            about writing clean, efficient, and accessible code. I focus on
            building practical and maintainable solutions, applying best
            practices and unit testing to ensure quality. I combine React power
            for dynamic interfaces with Node.js flexibility for efficient
            backends, always prioritizing simplicity, clarity, and effective
            results.
          </code>
          <code className="text-red-400">{"</p>"}</code>{" "}
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-row gap-4 items-center"
        >
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg min-w-[150px] max-w-[200px]"
            href="https://google.com"
            target="_blank"
          >
            Download CV
          </motion.a>

          <SliderInfinite images={images} speed={20} />
          <span className="text-gray-500 min-w-[100px]">... and more</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
