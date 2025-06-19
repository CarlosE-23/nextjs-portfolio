"use client";
// import { SkillDataProvider } from "@/components/sub/skill-data-provider";
// import { SkillText } from "@/components/sub/skill-text";

import { AnimatedCounter } from "@/lib/animatedCounter";
import "remixicon/fonts/remixicon.css";
import { useGhData } from "@/app/context/GhDataContext";

// import {
//   BACKEND_SKILL,
//   FRONTEND_SKILL,
//   FULLSTACK_SKILL,
//   OTHER_SKILL,
//   SKILL_DATA,
// } from "@/constants";

export const Skills = () => {
  const ghData = useGhData();

  const startDate = new Date(ghData.created_at); // Fecha de creación de la cuenta de GitHub
  // Calcular la diferencia en milisegundos
  // entre la fecha de inicio y la fecha actual
  if (!ghData.created_at) {
    console.error("created_at is not defined in ghData");
  }
  const endDate = new Date(); // Fecha actual
  const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

  // Milisegundos en un año (365.25 días para considerar años bisiestos)
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

  // Convertir a años
  const differenceInYears = Math.floor(
    differenceInMilliseconds / millisecondsInYear
  );

  const statistics = [
    {
      icon: (
        <i className="ri-git-repository-line text-fuchsia-500 text-2xl"></i>
      ),
      count: ghData.public_repos,
      label: "Public Repos",
      plus: false,
    },
    {
      icon: <i className="ri-git-fork-line text-violet-500 text-2xl"></i>,
      count: ghData.public_gists,
      label: "Public Gists",
      plus: false,
    },
    {
      icon: <i className="ri-user-received-line text-indigo-500 text-2xl"></i>,
      count: ghData.followers,
      label: "Followers",
      plus: false,
    },
    {
      icon: <i className="ri-user-shared-line text-blue-500 text-2xl"></i>,
      count: ghData.following,
      label: "Following",
      plus: false,
    },
    {
      icon: <i className="ri-database-line text-sky-500 text-2xl"></i>,
      count: differenceInYears + 1,
      label: "Backend years experience",
      plus: true,
    },
    {
      icon: <i className="ri-reactjs-line text-cyan-500 text-2xl"></i>,
      count: differenceInYears + 2,
      label: "Frontend years experience",
      plus: true,
    },
  ];

  return (
    <section className="relative flex flex-col h-full w-full mx-auto items-center">
      <div className="container">
        <h2 className="text-4xl text-center mx-auto text-white">
          Github Stats
        </h2>
        <div
          className="bg-3 rounded-3 position-relative overflow-hidden
        backdrop-blur-md bg-white/1 border border-transparent p-20 justify-between gh-bg grid gap-6
        grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col w-[150px] items-start m-auto"
            >
              {stat.icon}
              <h2 className="text-6xl my-0 fs-50">
                <span className="odometer text-white fw-medium">
                  <AnimatedCounter end={stat.count} />
                </span>
                <span className="text-gray-400">{stat.plus && "+"}</span>
              </h2>
              <p className="fs-6 mb-0 text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
