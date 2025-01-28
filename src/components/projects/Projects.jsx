import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Amply",
    imgSrc: "project-imgs/example-project.png",
    code: "https://github.com/Binar-Bootcamp/musik-asiq/tree/devel",
    tech: ["Kotlin", "Compose", "Room", "Retrofit"],
    description:
      "Music streaming app featuring a Relaxation Music category for calming and peaceful listening experiences.",
    modalContent: (
      <>
        <p>
          Amply is a music streaming app with a diverse library of songs from
          different genres and artists worldwide. It's the perfect app for
          discovering music tailored to your mood.
        </p>
        <p>
          One standout feature is the Relaxation Music category, offering a
          curated selection of calming and peaceful tunes for de-stressing and
          unwinding.
        </p>
        <p>
          Amply ensures high-quality audio playback and personalized playlists
          for every user.
        </p>
      </>
    ),
  },
  {
    title: "My Accountant",
    imgSrc: "project-imgs/example-project.png",
    code: "https://github.com/Binar-Bootcamp/my-accountant/tree/devel",
    tech: ["Kotlin", "Compose", "Room", "Retrofit"],
    description:
      "Simplifies financial management with features to track income, expenses, and cash flow.",
    modalContent: (
      <>
        <p>
          My Accountant is the ultimate financial management app for individuals
          and small businesses. It enables users to keep track of their income
          and expenses effortlessly.
        </p>
        <p>
          The app also offers tools to analyze cash flow, create budgets, and
          maintain accurate financial records to ensure users always stay on
          top of their finances.
        </p>
        <p>
          With an intuitive interface, My Accountant is perfect for both
          professionals and personal use.
        </p>
      </>
    ),
  },
  {
    title: "GolekTruk",
    imgSrc: "project-imgs/golek-project.png",
    projectLink: "https://play.google.com/store/apps/details?id=com.golektruk.dotcom",
    tech: ["Flutter", "Firebase", "Webview"],
    description:
      "Connects shippers and truckers in Indonesia for seamless cargo transportation.",
    modalContent: (
      <>
        <p>
          Golek Truk is a revolutionary app for the logistics industry in
          Indonesia. It acts as a bridge between shippers and truckers,
          simplifying the cargo transportation process.
        </p>
        <p>
          Shippers can find reliable truckers for their needs, while truckers
          can discover new opportunities and expand their networks.
        </p>
        <p>
          With a user-friendly interface and secure payment options, GolekTruk
          is changing the game for cargo transportation.
        </p>
      </>
    ),
  },
  {
    title: "AHU go.id",
    imgSrc: "project-imgs/ahu-project.png",
    projectLink: "https://www.ahu.go.id",
    tech: ["Yii", "PHP", "Elastic", "Redis", "MySQL"],
    description:
      "Provides online legal and administrative services for individuals and businesses.",
    modalContent: (
      <>
        <p>
          AHU go.id is a government-run platform that offers online legal and
          administrative services for Indonesian citizens and businesses.
        </p>
        <p>
          Services include registering legal entities, searching for company
          data, and applying for amendments—all available online for
          convenience.
        </p>
        <p>
          AHU go.id aims to simplify bureaucratic processes and make legal
          compliance more accessible.
        </p>
      </>
    ),
  },
  {
    title: "E-SAMAPTA",
    imgSrc: "project-imgs/vo-project.png",
    projectLink: "https://vo.1data.tech/",
    tech: ["Spring", "Java", "RabbitMQ", "Redis", "MySQL"],
    description:
      "An advanced platform for managing community safety through streamlined reporting and monitoring services.",
    modalContent: (
      <>
        <p>
          E-SAMAPTA is an innovative platform designed to enhance community safety and collaboration between citizens and law enforcement.
        </p>
        <p>
          The platform enables users to report incidents, monitor activities, and access real-time data to ensure a secure and organized community.
        </p>
        <p>
          With a focus on simplifying processes and fostering accountability, E-SAMAPTA leverages modern technologies to create a safer environment for all.
        </p>
      </>
    ),
  }
];
