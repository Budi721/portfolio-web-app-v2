import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Python</Chip>
            <Chip>Java</Chip>
            <Chip>Spring Boot</Chip>
            <Chip>Kafka</Chip>
            <Chip>MySQL</Chip>
            <Chip>Javascript</Chip>
            <Chip>NodeJS</Chip>
            <Chip>Flutter</Chip>
            <Chip>Postgres</Chip>
            <Chip>MongoDB</Chip>
            <Chip>GitHub</Chip>
            <Chip>Jira</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Rust</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Golang</Chip>
            <Chip>Solidity</Chip>
            <Chip>Jupiter Notebook</Chip>
            <Chip>Remix</Chip>
            <Chip>Etherium</Chip>
            <Chip>GraphQL</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
