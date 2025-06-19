"use client";

import { GhDataProvider } from "@/app/context/GhDataContext";
import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import { Encryption } from "@/components/main/encryption";
import { Projects } from "@/components/main/projects";
import { RecentProjects } from "@/components/recent-projects";

export default function Home() {
  return (
    <GhDataProvider>
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
          {/* <RecentProjects /> */}
          {/* <Encryption /> */}
          <Projects />
        </div>
      </main>
    </GhDataProvider>
  );
}
