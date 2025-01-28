import {AiOutlineArrowRight} from "react-icons/ai";
import {SectionHeader} from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import {MyLinks} from "../nav/Header";
import {Stats} from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l"/>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
              H
            </span>
              ey! I’m Rahmawan, a software engineer based in Pekalongan City, designing the future one line of code at a
              time. I started my career in a different field—brewing—which gave me a unique perspective, honing skills
              like problem-solving, attention to detail, and project management that now enhance my engineering work.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Living in a smaller city like Pekalongan has its own charm, offering a slower pace of life and lower cost
              of living while still presenting opportunities to work with local startups or remote companies in the tech
              industry.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              My journey from brewing to software engineering reflects my dedication to growth and learning. With the
              right mix of passion, curiosity, and continuous education, I’m building a career in this ever-evolving
              field while staying true to my roots.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I’m always open to opportunities that allow me to merge my love for problem-solving with creative
              expression. Let’s connect if you think we can create something amazing together 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight/>
              </div>
              <MyLinks/>
            </div>
          </Reveal>
        </div>
        <Stats/>
      </div>
    </section>
  );
};
