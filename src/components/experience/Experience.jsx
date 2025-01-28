import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "PT. Virtue Digital Indonesia",
    position: "Backend Developer",
    time: "January 2023 - Present",
    location: "Remote",
    description:
      "Developed and maintained backend systems for the Virtual Operation project, ensuring high performance and reliability. Integrated Flespi and Traccar for real-time tracking and data processing. Utilized Grafana and Prometheus for system monitoring and visualization. Optimized MySQL databases for faster query performance, resulting in a 20% improvement in data retrieval times.",
    tech: ["Golang", "MySQL", "Flespi", "Traccar", "Grafana", "Prometheus"],
  },
  {
    title: "GolekTruk",
    position: "Frontend Developer",
    time: "November 2021 - January 2023",
    location: "Semarang, Central Java",
    description:
      "Created the GolekTruk application and published it to the Google Play Store within 8 months. Spearheaded the development of Sipro's internal accounting and dashboard to optimize website performance and UX experience within 3 months. Ensured the functionality and up-to-date status of the GolekTruk website, resulting in improved website traffic and sales.",
    tech: ["Flutter", "Dart", "Midtrans", "Web View", "Google Play Store"],
  },
  {
    title: "Microvac Indonesia",
    position: "Backend Developer",
    time: "February 2021 - November 2021",
    location: "Bandung, West Java",
    description:
      "Identified and resolved bugs in the production environment, resulting in a more stable system and increased user satisfaction. Deployed and released new features in a staging server environment, ensuring stable and reliable quality for users.",
    tech: ["Golang", "Bug Fixing", "Staging Deployment", "System Monitoring"],
  },
];
