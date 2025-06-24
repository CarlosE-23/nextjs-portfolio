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
      <header>
        <meta
          name="impact-site-verification"
          content="e2d48a8c-f4ac-4e12-8b4d-4b7694c7dbc9"
        />
      </header>
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
