import React, {useState} from "react";
import {SectionHeader} from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import {FiBarChart, FiBell, FiDollarSign, FiPlay, FiTerminal} from "react-icons/fi";
import {Panel} from "@/components/certificates/Panel";
import {FaGolang} from "react-icons/fa6";
import {FaGoogle, FaPython} from "react-icons/fa";
import {SiPostgresql} from "react-icons/si";

export const Certificates = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="section-wrapper" id="certificates">
      <SectionHeader title="Certificates" dir="r" />

      <div>
        <Reveal>
          <section className="p-4 bg-indigo-600">
            <div
              className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
              {items.map((item) => {
                return (
                  <Panel
                    key={item.id}
                    open={open}
                    setOpen={setOpen}
                    id={item.id}
                    Icon={item.Icon}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    description={item.description}
                  />
                );
              })}
            </div>
          </section>
        </Reveal>
      </div>
    </section>
  );
};


const items = [
  {
    id: 1,
    title: "Golang",
    Icon: FaGolang, // Icon for Golang
    imgSrc: "/certificates/google-certif.png",
    description: "Advanced Golang Mini Course - Altera. This course covers advanced topics in Go programming, including concurrency, performance optimization, and best practices.",
  },
  {
    id: 2,
    title: "Google",
    Icon: FaGoogle, // Icon for Google
    imgSrc: "/certificates/gcloud-certif.png",
    description: "Google Cloud Certification - Professional Cloud Architect. This certification validates expertise in designing and managing robust, secure, and scalable cloud solutions on Google Cloud Platform.",
  },
  {
    id: 3,
    title: "Postgres",
    Icon: SiPostgresql, // Icon for PostgreSQL
    imgSrc: "/certificates/postgres-certif.png",
    description: "PostgreSQL for Developers - Advanced Database Management. This course focuses on advanced PostgreSQL features, including indexing, query optimization, and database administration.",
  },
  {
    id: 4,
    title: "Python",
    Icon: FaPython, // Icon for Python
    imgSrc: "/certificates/python-certif.png",
    description: "Python for Data Science and Machine Learning. This course provides in-depth knowledge of Python libraries and tools for data analysis, visualization, and machine learning.",
  },
];