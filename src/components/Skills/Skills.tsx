import { Code } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiMongoose,
  SiJsonwebtokens,
  SiWebcomponentsdotorg,
  SiDocker,
  SiGit,
  SiAmazon,
  SiLinux,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { RiRestartLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";

const skills = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript className="text-green-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-green-400" /> },
    { name: "Python", icon: <SiPython className="text-green-400" /> },
    { name: "SQL", icon: <FaDatabase className="text-green-400" /> },
  ],
  frameworks: [
    { name: "Node.js", icon: <IoLogoNodejs className="text-green-400" /> },
    { name: "Express", icon: <SiExpress className="text-green-400" /> },
    { name: "NestJS", icon: <SiNestjs className="text-green-400" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-400" /> },
  ],
  databases: [
    { name: "PostgreSQL", icon: <SiPostgresql className="text-green-400" /> },
    { name: "MySQL", icon: <DiMysql className="text-green-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Redis", icon: <SiRedis className="text-green-400" /> },
  ],
  orms: [
    { name: "Prisma", icon: <SiPrisma className="text-green-400" /> },
    { name: "TypeORM", icon: <SiTypescript className="text-green-400" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-green-400" /> },
    { name: "SQLAlchemy", icon: <FaDatabase className="text-green-400" /> },
  ],
  other: [
    { name: "REST APIs", icon: <RiRestartLine className="text-green-400" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-green-400" /> },
    {
      name: "OAuth2",
      icon: <SiWebcomponentsdotorg className="text-green-400" />,
    },
    { name: "Microservices", icon: <FaServer className="text-green-400" /> },
    {
      name: "WebSockets",
      icon: <SiWebcomponentsdotorg className="text-green-400" />,
    },
  ],
  tools: [
    { name: "Docker", icon: <SiDocker className="text-green-400" /> },
    { name: "Git", icon: <SiGit className="text-green-400" /> },
    { name: "AWS", icon: <SiAmazon className="text-green-400" /> },
    { name: "Linux", icon: <SiLinux className="text-green-400" /> },
  ],
};

export const Skills = () => {
  return (
    <section id="skills" className="mb-32">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Code className="w-8 h-8" />
        <span>$ cat skills.json</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-green-400/30 p-6 rounded bg-green-400/5 hover:bg-green-400/10 transition-colors"
          >
            <div className="flex items-start gap-3 mb-4">
              <h3 className="text-lg font-bold text-green-400 uppercase">
                {category}
              </h3>
              <span className="text-green-500">{"{"}</span>
            </div>
            <div className="pl-6 space-y-2">
              {items.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">→</span>
                  <span className="flex items-center gap-2 text-green-400/90">
                    <span className="w-5 h-5 flex items-center justify-center">
                      {item.icon}
                    </span>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 mt-4">
              <span className="text-green-500">{"}"}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
