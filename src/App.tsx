import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { SITE_CONTENT } from "@config";
import Hero from "@components/Hero";
import Layout from "@layouts/Layout";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import GithubCTA from "@components/GithubCTA";
import Skills from "@components/Skills";
import Certifications from "@components/Certifications";
import About from "@components/About";

export default function App() {
  return (
    <Layout>
      <Hero {...SITE_CONTENT.hero} />
      <Experience experience={SITE_CONTENT.experience} />
      <Projects projects={SITE_CONTENT.projects} />
      <GithubCTA githubUrl="https://github.com/notoctavio" />
      <Skills skills={SITE_CONTENT.skills} />
      <Certifications certifications={SITE_CONTENT.certifications} />
      <About {...SITE_CONTENT.about} name={SITE_CONTENT.hero.name} />
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}
